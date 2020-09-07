import React from 'react'
import './index.css'
import SecurityPolicy from '../SecurityPolicy'
import ProcessingPersonalData from '../ProcessingPersonalData'
import $ from 'jquery'

export default class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            second_name: '',
            email: '',
            birthday: '',
            phone: '',
            photo: '',
            success: null,
            show_security_policy: false,
            show_processing_personal_data: false,
            show_form: true,
            fileDownloaded: false,
        }
    }

    componentDidMount = () => {
        if (window.location.href.toString().indexOf('?result=show') !== -1) {
            this.setState({
                success: true
            })
        }

        document.getElementById("win").addEventListener("click", function (e) {
            e = window.event || e;
            if (this === e.target) {
                window.location.href = "#/"
            }
        });

        //определяем геопозицию
        window.ymaps.ready()
            .then(() => window.ymaps.geolocation.get({ autoReverseGeocode: false })
                .then(res => res.geoObjects.get(0).geometry.getCoordinates()))
            .then(ll => (console.log(ll), window.ymaps.geocode(ll)))
            .then(res => res.geoObjects.get(0).getLocalities())
            .then(city => $('#user-city').val(`${city}`))
            .catch(err => console.log('Не удалось определить геопозицию'))
    }

    openFile = () => {
        let _this = this;

        (function ($) {
            $('.inputfile').each(function () {
                var $input = $(this),
                    $label = $input.next('label'),
                    labelVal = $label.html();

                $input.on('change', function (e) {
                    var fileName = '';

                    if (this.files && this.files.length > 1)
                        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                    else if (e.target.value)
                        fileName = e.target.value.split('\\').pop();

                    if (fileName) {
                        $label.find('.archive-name').html(fileName);
                        _this.setState({ fileDownloaded: true })
                    }
                    else
                        $label.html(labelVal);
                });

                // Firefox bug fix
                $input
                    .on('focus', function () { $input.addClass('has-focus'); })
                    .on('blur', function () { $input.removeClass('has-focus'); });
            });
        })($, window, document);
    }

    onCloseClick = () => {
        const { show_form } = this.state;

        if (show_form !== true) {
            this.setState({
                success: null,
                show_processing_personal_data: false,
                show_security_policy: false,
                show_form: true,
                fileDownloaded: false
            })
        } else {
            window.location.href = "#/"
        }
    }

    handleSubmit = (e) => {
        //слушаем клик на кнопку "Отправить" 
        let _this = this;

        e.preventDefault();

        var confirm = document.getElementsByClassName("checkbox")[0];
        if (confirm.checked == false) {
            alert("Подтвердите согласие на обработку персональных данных");
        } else if (_this.state.fileDownloaded === false) {
            alert("Загрузите файл!")
        }
        else {
            $.ajax({
                url: "https://vkbotdev.mywfc.ru/tresnutye",
                dataType: 'json',
                method: 'POST',
                data: $('.login-form').serialize(),
                success: function (data) {
                    console.log(data.success);
                    _this.setState({ show_form: false, success: true })
                },
                error: function (jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Что-то пошло не так... Попробуйте еще раз!' + jqXHR.status;
                    }
                    console.log(msg);
                    _this.setState({ show_form: false, success: false })
                }
            });
        }
    }

    render() {
        const { success, show_processing_personal_data, show_security_policy, show_form } = this.state;

        return (
            <div className="modalComponent" >
                <div id="win" className="modal-window">
                    <div className="form">
                        <a onClick={this.onCloseClick} title="Close" className="modal-close"><b>X</b></a>
                        {show_form &&
                            <form className="login-form" action="https://vkbotdev.mywfc.ru/tresnutye" method="post" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <p className="header yellow text-left">Заполни форму</p>
                                    </div>
                                </div>
                                <div id="info_div">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <input type="text" name="first_name" placeholder="Имя" required />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" name="second_name" placeholder="Фамилия" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <input type="date" name="birthday" placeholder="Дата рождения" required />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="tel" name="phone" placeholder="Номер телефона" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <input type="text" name="city" id="user-city" placeholder="Город" required />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" name="shop" placeholder="Магазин" value={this.props.name} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <input type="email" name="email" placeholder="E-mail" required />
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="file" name="photo" id="file-7" className="inputfile" onClick={() => this.openFile()} data-multiple-caption="{count} arquivos selecionados" multiple />
                                                <label htmlFor="file-7"><span className="archive-name"></span><span className="btn-inputfile header"></span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button type="submit" className="header button-s button-send-form">Отправить</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex justify-content-center text-left">
                                            <div className="send_block">
                                                <input type="checkbox" defaultChecked={false} id="security_policy" className="checkbox" name="securuty_policy" />
                                                <label htmlFor="security_policy"><p className="message">Я согласен с <a
                                                    onClick={() => this.setState({ show_form: false, show_security_policy: true })} className="politics">политикой конфиденциальности </a><br />
                                                и <a onClick={() => this.setState({ show_form: false, show_processing_personal_data: true })} className="politics">обработкой моих данных</a></p></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>}
                        {success ?
                            <form>
                                <h2>Вы успешно отправили заявку!</h2>
                            </form>
                            :
                            success === false &&
                            <form>
                                <h2>Упс, произошла ошибка...</h2>
                                <p>Попробуйте еще раз!</p>
                            </form>}
                        {show_security_policy &&
                            <SecurityPolicy />
                        }
                        {show_processing_personal_data &&
                            <ProcessingPersonalData />
                        }
                    </div>
                </div>
            </div>
        )
    }
}