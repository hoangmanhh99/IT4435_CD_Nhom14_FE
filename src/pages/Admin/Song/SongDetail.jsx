import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router';
import {
    Form,
    Input,
    Button,
    Select,
    notification,
    Upload,
     Row, Col
} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import singerAPI from '../../../api/singer';
import songAPI from '../../../api/song';
import categoryAPI from '../../../api/category';
import ImageUpload from './ImageUpload';
import FileUpload from './FileUpload';
import TextArea from 'antd/lib/input/TextArea';



const initialSong = {
    _id: null,
    name: '',
    description: '',
    lyric: '',
    categories: [],
    singers: [],

}

const SongDetail = ({moderatorToken}) => {

    const location = useLocation();
    const [song, setSong] = useState(initialSong);
    const [singerList, setSingerList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cateSelected, setCateSelected] = useState([]);
    const [singerSelected, setSingerSelected] = useState([]);


    useEffect(() => {
        if(song._id == null)
            setDetail();
        console.log("song update: ", song);
    }, [song, song.cover_image, song.file])

    useEffect(() => {
        fetchCategories();
        fetchSingers();
    }, [])

    const fetchCategories = async () => {
        let {data} = await categoryAPI.getListCategory();
        console.log("category: ", data);
        setCategories(data.data);
    }

    const fetchSingers = async () => {
        let {data} = await singerAPI.getAllSinger();
        console.log("singer: ", data);
        setSingerList(data.data);

    }

    const setDetail = () => {
        let song = location.state.song;
        setSong(song);
    }

    const onChangeImage = async (e) => {
        let image = e.target.files[0];
        let imageForm = new FormData();
        imageForm.append('cover_image', image);
        const {data} = await songAPI.updateImage(song._id, imageForm, moderatorToken);
        console.log(data);
        if(data && data.status == 1){
            setSong({...song, cover_image: data.result.coverImage});
            notification.success({message: "Thay ?????i ???nh b??a th??nh c??ng!"});
        }
        else
            notification.error({message: "C?? l???i x???y ra: " + data.message});
    }

    const onChangeFile = async (e) => {
        let fileForm = new FormData();
        fileForm.append('file', e.target.files[0]);
        const {data} = await songAPI.updateFile(song._id, fileForm, moderatorToken);
        if(data && data.status == 1){
            setSong({...song, file: data.result.file});
            notification.success({message: "Thay ?????i File nhac th??nh c??ng!"});
        }
        else
            notification.error({message: "C?? l???i x???y ra: " + data.message});
        // setFileMusic(file);
    }

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setSong({...song, [name]: value});
    }

    const handleChangeSelectCategory = (value) => {
        setSong({...song, categories: [...value]});
        setCateSelected(value);

    }

    const handleChangeSelectSinger = (value) => {
        setSong({...song, singers: [...value]});
        setSingerSelected(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("song submit: ", song);
       
        let dataF = {
            name: song.name,
            description: song.description,
            lyric: song.lyric,
            categories: cateSelected,
            singers: singerSelected,
        }
        console.log(dataF);
        let {data} = await songAPI.update(song._id, dataF, moderatorToken);
        if(data && data.status == 1){
            notification.success({message: "C???p nh???t b??i h??t th??nh c??ng!"});
        }
        else{
            notification.error({message: "C?? l???i x???y ra, xin th??? l???i sau! \n" + data.message});
        }

    }



    return (

        <div>
            <h1 style={{ fontSize: '30px' }}>{song.name}</h1>
            <Button type="primary" onClick={onSubmit}>L??u</Button>
            <br/>
            <br/>
            <Row>
                <Col span={12}>

                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        // onValuesChange={onFormLayoutChange}
                        size={"middle"}
                    >


                        <Form.Item label="T??n b??i h??t"
                            rules={[
                                {
                                    message: 'ch??a nh???p t??n b??i h??t',
                                }]}
                        >
                            <Input name="name" value={song.name} onChange={onChangeInput}/>

                        </Form.Item>

                        <Form.Item label="Th??? lo???i">
                            <Select 
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Ch???n th??? lo???i cho b??i h??t"
                            // defaultValue={song.categories}
                            onChange={handleChangeSelectCategory}
                            optionLabelProp="label">
                                {
                                    categories && categories.map((item, index) => {
                                        return (
                                        <Select.Option key={index} value={item._id} label={item.name}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                                
                            </Select>
                        </Form.Item>
                        <Form.Item label="Ca s???">
                            <Select 
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Ch???n ca s??? th??? hi???n"
                            onChange={handleChangeSelectSinger}
                            optionLabelProp="label">
                                {
                                    singerList && singerList.map((item, index) => {
                                        return (
                                        <Select.Option key={index} value={item._id} label={item.name}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                                
                            </Select>
                        </Form.Item>

                        <Form.Item label="L???i b??i h??t">
                            <TextArea name="lyric" value={song.lyric} onChange={onChangeInput}  autoSize={{ minRows: 3, maxRows: 5 }}/>
                        </Form.Item>
                        <Form.Item label="Th??m m?? t???">
                            <TextArea name="description" value={song.description} onChange={onChangeInput}  autoSize={{ minRows: 3, maxRows: 5 }}/>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12}>
                <div className="image-preview">
                    <img className="img-preview"
                     src={ song.cover_image 
                        ? song.cover_image.path
                        : "https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} alt=""/>
                </div> 
                <label className="custom-file-upload">
                    <input type="file" onChange={onChangeImage}/>
                    Thay ?????i ???nh b??a
                </label>
                    <br/>
                    <br/>
                {
                song.file ? 
                <video autoBuffer="autobuffer" autoPlay="autoplay" width="240" height="240"
                 controls src={song.file.path}/>
                : <h4>Ch??a c?? file nghe n??o!</h4>
                }
                <br/>
                <label className="custom-file-upload">
                    <input type="file" onChange={onChangeFile}/>
                    Thay ?????i File nh???c
                </label>
                </Col>
            </Row>



        </div>);
}

export default SongDetail;