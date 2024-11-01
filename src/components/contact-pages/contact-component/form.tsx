import React, { useState } from 'react';
import { PrimaryButton,DefaultButton } from '../../../ui-kit/button';

const ContactForm:React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const isFormFilled = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormFilled) return;
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <article className="form-container">
            <h1>Only CTA on the page</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Value"
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Value"
                    />
                </label>
                <label>
                    Message
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Value"
                    />
                </label>
                {/* Если все поля заполнены, показываем активную кнопку, иначе - заблокированную */}
                {isFormFilled ? (
                    <PrimaryButton onClick={handleSubmit} title="Submit" />
                ) : (
                    <DefaultButton title="Submit" />
                )}
            </form>
        </article>
    );
};

export default ContactForm;
// import React, { useState } from 'react';

// interface ContactFormProps {
//     onSubmit?: (data: { name: string; email: string; message: string }) => void;
// }

// const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
//     const [name, setName] = useState<string>('');
//     const [email, setEmail] = useState<string>('');
//     const [message, setMessage] = useState<string>('');

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = { name, email, message };
        
//         if (onSubmit) {
//             onSubmit(formData);
//         } else {
//             console.log(formData);
//         }

//         // Очистка полей после отправки
//         setName('');
//         setEmail('');
//         setMessage('');
//     };

//     return (
//         <div className="form-container">
//             <h1>Only CTA on the page</h1>
//             <form onSubmit={handleSubmit} className="contact-form">
//                 <label>
//                     Name
//                     <input 
//                         type="text" 
//                         value={name} 
//                         onChange={(e) => setName(e.target.value)} 
//                         placeholder="Value"
//                     />
//                 </label>
//                 <label>
//                     Email
//                     <input 
//                         type="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         placeholder="Value"
//                     />
//                 </label>
//                 <label>
//                     Message
//                     <textarea 
//                         value={message} 
//                         onChange={(e) => setMessage(e.target.value)} 
//                         placeholder="Value"
//                     />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;
