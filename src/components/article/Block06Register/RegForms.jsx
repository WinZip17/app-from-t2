import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getUsersThunkCreator} from "../../../store/actions/ourCheerfulUsers";
import UploadIco from "../../../media/article/upload.svg";
import {
    getPositionThunkCreator,
    getTokenThunkCreator,
    resetListAC,
    setIsVisibleAC,
    updatePhotoAC
} from "../../../store/actions/registerUser";
import {API} from "../../../api/API";
import Successfully from "./SuccessfullyRegistered";
import {Button, Form, Input, Select, Tooltip, Upload} from "antd";
import CaretDown from '../../../media/article/caret-down.svg'
import propTypes from "prop-types";
import InputMask from 'react-input-mask';

const {Option} = Select;

//окончание регестрации с высплывающим окном и очисткой стейта от данных пользователя
export const RegistResult = (setIsVisible, resetList, getUsers, updatePhoto) => {
    // сбросить стейт отображаемых людей на пустой
    resetList();
    // запросить новых людей :)
    getUsers(1);
    //сбросить название файла
    updatePhoto("Upload your photo");
    //показать окошко с поздравлялками :)
    setIsVisible(true);
};

const RegFormsData = (props) => {

    const [fileName, setFileName] = useState("Upload your photo");
    const [errors, setErrors] = useState(false);
    const [nameErrors, setNameErrors] = useState(false);
    const [emailErrors, setEmailErrors] = useState(false);
    const [phoneErrors, setPhoneErrors] = useState(false);
    const [allValue, setAllValue] = useState(true);

    const {
        form: {validateFields, getFieldDecorator, getFieldsValue, setFieldsValue, resetFields, getFieldsError}
    } = props;


//валидаторы
    const validateMaxLength60 = (rule, value, callback) => {
        if (value && value.length > 60) {
            callback("60 characters maximum!");
        } else {
            callback();
        }
    };

    const validateLengthPhone = (rule, value, callback) => {
        if (value && value.replace(/\D/g, '').length < 12) {
            callback("Invalid phone ");
        } else {
            callback();
        }
    };

    const photoValid = (rule, value, callback) => {
        if (value && value.file.size > 5120000) {
            setErrors(true);
            callback("Size must not exceed 5MB");
        } else if (value && value.file.type !== "image/jpeg") {
            setErrors(true);
            callback("User photo should be jpg/jpeg image");
        } else {
            setErrors(false);
            callback();
        }
    };

    const emailValid = (rule, value, callback) => {
        if (value && !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(value)) {
            callback("Invalid email address");
        } else {
            callback();
        }
    };

    const submit = (event) => {
        event.preventDefault();
        validateFields((errors, values) => {
            if (!errors) {
                let data = values;
                data.phone = `+${data.phone.replace(/\D/g, '')}`;
                API.postUsers(data, props.setIsVisible, props.resetList, props.getUsers, props.newUser.token, props.updatePhoto);
                resetFields();
                setAllValue(true);
            }
            if (errors.photo) setErrors(true);
        });
    };

    //получить токен пока не начали отправлять форму
    useEffect(() => {
        props.getToken();
    }, []);

    //загрузка данных для позиций
    useEffect(() => {
        if (!props.newUser.position_data.success) props.showPosition();
    }, [props.newUser.position_data]);

    //проверка на наличие ошибок для подсветки лейбла (в комплект форм не входил)
    const getErrors = (value) => {
        let nameField = value.currentTarget.id;
        let error = getFieldsError();
        if (value.type === "blur" && value.currentTarget.value === "") error[nameField] = "error";
        if (nameField === "name") error[nameField] ? setNameErrors(true) : setNameErrors(false);
        if (nameField === "email") error[nameField] ? setEmailErrors(true) : setEmailErrors(false);
        if (nameField === "phone") error[nameField] ? setPhoneErrors(true) : setPhoneErrors(false);
    };

    //активатор кнопки отправки
    const getCompleted = () => {
        let info = getFieldsValue();
        if (allValue !== false && info.name && info.email && info.phone && info.position && info.photo) {
            setAllValue(false);
        }
    };

    return (
        <div>
            <div>
                <Form id='formRegister' onSubmit={submit} layout="inline">
                    <Form.Item className="form-item">
                        <div className={`Legend-register ${nameErrors && "error"}`}>Name</div>
                        {getFieldDecorator('name', {
                            validateTrigger: ["onBlur"],
                            rules: [
                                {required: true, message: 'Name is required!'},
                                {validator: validateMaxLength60}
                            ]
                        })(
                            <Input
                                type="text"
                                id='name'
                                placeholder="Your name"
                                className="forms-register"
                                onChange={(value) => {
                                    getErrors(value);
                                    setFieldsValue({name: value});
                                    getCompleted();
                                }}
                                onBlur={getErrors}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item className="form-item">
                        <div className={`Legend-register ${emailErrors && "error"}`}>Email</div>
                        {getFieldDecorator('email', {
                            validateTrigger: ["onBlur"],
                            rules: [
                                {required: true, message: 'Email is required!'},
                                {validator: emailValid}
                            ]
                        })(
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="forms-register"
                                onChange={(value) => {
                                    getErrors(value);
                                    setFieldsValue({email: value});
                                    getCompleted();
                                }}
                                onBlur={getErrors}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item className="form-item">
                        <div className={`Legend-register ${phoneErrors && "error"}`}>Phone</div>
                        {getFieldDecorator('phone', {
                            validateTrigger: ["onBlur"],
                            rules: [
                                {required: true, message: 'Phone is required!'},
                                {validator: validateLengthPhone}
                            ]
                        })
                        (
                            <InputMask mask='+38 (099) 999 99 99' className="forms-register"
                                       placeholder="+38 (___) ___ __ __"
                                       onChange={(value) => {
                                           getErrors(value);
                                           setFieldsValue({phone: `${value}`});
                                           getCompleted();
                                       }}
                                       onBlur={getErrors}>
                                {(inputProps) => <Input {...inputProps}/>}
                            </InputMask>
                        )}
                    </Form.Item>
                    <Form.Item className="form-item">
                        {getFieldDecorator('position', {
                            initialValue: null,
                            validateTrigger: ["onBlur"],
                            rules: [{required: true, message: 'Position is required!'}]
                        })(
                            <Select
                                suffixIcon={<CaretDown/>}
                                className='position-register'
                                onChange={(value) => {
                                    setFieldsValue({position: value})
                                    getCompleted()
                                }}
                            >
                                <Option value={null}> Select your position</Option>
                                {props.newUser.position_data.positions && props.newUser.position_data.positions.map(p => (
                                    <Option key={p.id} value={p.id}> {p.name} </Option>
                                ))}
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('photo', {
                            validateTrigger: ["onChange"],
                            rules: [
                                {required: true, message: 'Photo is required!'},
                                {validator: photoValid}
                            ]
                        })(
                            <Upload
                                accept="jpeg/jpg"
                                customRequest={() => {
                                    return true
                                }}
                                placeholder="Your photo"
                                showUploadList={false}
                                supportServerRender={false}
                                className="photo-register"
                                onChange={(value) => {
                                    setFieldsValue({photo: value});
                                    setFileName(value.file.name);
                                    getCompleted();
                                }}
                            >
                                <div className='photo-register-name-button-shell'>
                                    <Tooltip placement="top" title={fileName.length > 20 && fileName}>
                                        <span className='photoName-register'>{fileName}</span>
                                    </Tooltip>
                                    <Button className='buttonUpload-register'>
                                        {props.innerWidth > 768 ? <span className='uploadText-register'>Upload</span> :
                                            <span className='uploadIcon-register'><UploadIco/></span>}
                                    </Button>
                                </div>
                                {!errors && <p className='commentPhoto-register'> File format jpg up to 5 MB, the
                                    minimum size of
                                    70x70px</p>}
                            </Upload>,
                        )}
                    </Form.Item>
                </Form>
                <div className='buttonSell-register'>
                    <button type="submit" disabled={allValue} form="formRegister"
                            className="buttonPrimary fix-button-register">Sign Up
                    </button>
                </div>
            </div>
            {props.newUser.isVisible && <Successfully isVisible={props.setIsVisible}/>}
        </div>
    );
};

RegFormsData.propTypes = {
    newUser: propTypes.object,
    innerWidth: propTypes.number,
    getToken: propTypes.func,
    showPosition: propTypes.func,
    updatePhoto: propTypes.func,
    setIsVisible: propTypes.func,
    resetList: propTypes.func,
    getUsers: propTypes.func
};

let mapStateToProps = (state) => {
    return {
        newUser: state.registerUser,
        innerWidth: state.app.innerWidth
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        getToken: () => {
            dispatch(getTokenThunkCreator());
        },
        showPosition: () => {
            dispatch(getPositionThunkCreator());
        },
        updatePhoto: (fileName) => {
            dispatch(updatePhotoAC(fileName));
        },
        setIsVisible: (setIsVisible) => {
            dispatch(setIsVisibleAC(setIsVisible));
        },
        resetList: () => {
            dispatch(resetListAC());
        },
        getUsers: (page, count) => {
            dispatch(getUsersThunkCreator(page, count));
        }
    }
};

const RegForms = connect(mapStateToProps, mapDispatchToProps)(RegFormsData);

export default Form.create()(RegForms);
