import Form from 'next/form'


const ContactForm = () => {
    return ( 
        <div>
            <Form action="/api/contact" method="POST"> 
                <input type="text" placeholder="Имя" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Телефон" />
                <button type="submit">Отправить</button>
            </Form>
        </div>
     );
}

 
export default ContactForm;

{/* todo: ДОХУЯ ДЕЛАТЬ) */}