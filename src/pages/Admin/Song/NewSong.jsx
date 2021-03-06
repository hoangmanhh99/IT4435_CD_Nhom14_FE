import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    notification,
     Row, Col
} from 'antd';
import singerAPI from '../../../api/singer';
import songAPI from '../../../api/song';
import categoryAPI from '../../../api/category';
import ImageUpload from './ImageUpload';
import FileUpload from './FileUpload';
import TextArea from 'antd/lib/input/TextArea';



const initialSong = {
    name: '',
    description: '',
    lyric: '',
    categories: [],
    singers: [],

}

const NewSong = ({moderatorToken}) => {

    const [song, setSong] = useState(initialSong);
    const [fileMusic, setFileMusic] = useState();
    const [image, setImage] = useState();
    const [singerList, setSingerList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if(categories.length == 0 && singerList.length == 0){
            fetchCategories();
            fetchSingers();
        }
       
    }, [song])

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

    const onChangeImage = (image) => {
        setImage(image);
    }

    const onChangeFile = (file) => {
        setFileMusic(file);
    }

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setSong({...song, [name]: value});
    }

    const handleChangeSelectCategory = (value) => {
        setSong({...song, categories: [...value]});
    }

    const handleChangeSelectSinger = (value) => {
        setSong({...song, singers: [...value]});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("song submit: ", song);
        
        let dataF = new FormData();
        dataF.append("fileAndImage", fileMusic);
        dataF.append("fileAndImage", image);

        dataF.append("name",song.name)
        dataF.append("description",song.description)
        dataF.append("lyric",song.lyric)
        dataF.append("categories",song.categories)   
        dataF.append("singers",song.singers)

        let {data} = await songAPI.createSong(dataF, moderatorToken);
        console.log()
        if(data.status === 1){
            notification.success({message: "T???o B??i H??t Th??nh C??ng!"})
        }
        else{
            notification.error({message: "C?? l???i x???y ra, xin th??? l???i sau! \n" + data.message});
        }

    }



    return (

        <div>
            <h1 style={{ fontSize: '30px' }}>T???o m???i b??i h??t</h1>
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
                    <ImageUpload onChange={onChangeImage} />

                    <FileUpload onChange={onChangeFile} />
                </Col>
            </Row>



        </div>);
}

export default NewSong;