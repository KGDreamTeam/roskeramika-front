import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const PanelWithOffer = (props) => {
	return(
		<div className='panel-with-offer'>
			<Formik
				initialValues={
					{
						phone: '',
						dostavka: 'Samovyvoz',
						fio: '',
						email: '',
						state: 'bishkek',
						oplata: 'nal'
					}
				}
				validationSchema={
					Yup.object().shape({
						phone: Yup.string()
							.required('required'),
						email: Yup.string()
							.required('required'),
						fio: Yup.string()
							.required('required')
					})
				}
				onSubmit={
					fields => {
						props.handleChangePassword({
							phone: fields.phone,
							password: fields.password,
							otp: fields.otp
						})
					}
				}>
				{() => (
					<>
					<h2>Для оформления заказа заполните форму:</h2>
					<Form className='form'>
						<div className='left'>
							<div className='label'>
								<Field type="text" name="fio" placeholder='ФИО' />
								<ErrorMessage name="fio" component="div" className='error'/>
							</div>
							
							<div className='label'>
								<Field type="email" name="email" placeholder='Email' />
								<ErrorMessage name="email" component="div" className='error'/>
							</div>

							<div className='label'>
								<Field type="text" name="phone" placeholder='Телефон' />
								<ErrorMessage name="phone" component="div" className='error'/>
							</div>

							<div className='label'>
								<div role="group" aria-labelledby="my-radio-group">
									<div className='text'>Способ доставки:</div>
									<div className='labels-radios'>
										<label htmlFor='sam'>
											<Field id='sam' type="radio" name="dostavka" value="Samovyvoz"/>
											<span>Самовывоз</span>
										</label>
										<label htmlFor='dostavka'>
											<Field id='dostavka' type="radio" name="dostavka" value="Dostavka" />
											<span>Доставка нашей фирмой</span>
										</label>

									</div>
								</div>
							</div>

							<button type="submit" className='submit-btn'>
								Оформить
							</button>
						</div>
						<div className='right'>
							<div className='label'>
								<Field as='textarea' name="comment" placeholder='comment' className='comment'/>
								<ErrorMessage name="comment" component="div" className='error'/>
							</div>
							
							<div className='label'>
								<div className='text'>Выберите населенный пункт или город</div>
								<Field as='select' name="state" >
									<option value='bishkek'>Бишкек</option>
									<option value='kant'>Кант</option>
									<option value='tokmok'>Токмок</option>
									<option value='karaBalta'>Г. Кара-Балта</option>
									<option value='leninskoe'>C. Ленинское</option>
									<option value='novopavlovka'>C. Новопавловка</option>
									<option value='voennoAntonovka'>С. Военно-Антоновка</option>
									<option value='novoPokrovka'>C. Ново-Покровка</option>
								</Field>
							</div>


							<div className='label'>
								<Field type="text" name="address" placeholder='Адрес' />
								<ErrorMessage name="address" component="div" className='error'/>
							</div>

							<div className='label'>
								<div role="group" aria-labelledby="my-radio-group">
									<div className='text'>Способ оплаты:</div>
									<div className='labels-radios'>
										<label htmlFor='nal'>
											<Field id='nal' type="radio" name="oplata" value="nal"/>
											<span>Наличными в магазине</span>
										</label>
										<label htmlFor='elsom'>
											<Field id='elsom' type="radio" name="oplata" value="elsom" />
											<span>Эльсом</span>
										</label>

									</div>
								</div>
							</div>
						</div>
					</Form>
					</>
				)}
			</Formik>
		</div>
	)
}

export default PanelWithOffer
