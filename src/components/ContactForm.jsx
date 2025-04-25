import { Formik,Form, Field,ErrorMessage} from "formik";
import axios from "axios";
import * as Yup from "yup";

// start json server to send message from contact form
// json-server --watch db.json
const ContactForm = () => {

    const initialValues = {
        name:'',
        email:'',
        message:''
    }
    
    const validationSchema = Yup.object({
       name: Yup.string().required('Name is required'),
       email: Yup.string().email('Invalid email format').required('Email is required'),
       message: Yup.string().required('Message is required')
    })
    const handleSubmit = async (values,{setSubmitting,resetForm}) => {
        try{
            await axios.post('http://localhost:3000/contacts',values)
            
            alert('Message sent Successfully!')
            resetForm();
        }
         catch(error)
         {
             alert('Something went wrong. Please try again.')
             
         }
         setSubmitting(false)
    }

    return(

        <>
            <div>
             <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
             >
                {({isSubmitting}) => (
              
             <div className="w-[500px] mr-3 md:w-1/2 md:mx-auto md:flex justify-center "> 
             <Form className="rounded-lg shadow-lg bg-white mt-2 py-10 px-6">
              
              <h3 className="text-center text-2xl mt-2">Contact Us</h3>
                <div className="flex flex-col gap-2 mt-5">
                 <label htmlFor="name" className="text-xl ">Name:</label>
                 <Field type='text' name='name' className='border border-black md:w-full w-[400px] h-8 rounded px-2 
                
                 ' />
                 <span className="text-red-500"><ErrorMessage name='name' /></span>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                 <label htmlFor="email" className="text-xl">Email:</label>
                 <Field type='email' name='email' className='border border-black md:w-full w-[400px] h-8 rounded px-2' />
                  <span className="text-red-500"><ErrorMessage name='email' /></span>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                 <label htmlFor="message" className="text-xl">Message:</label>
                 <Field as='textarea' name='message' cols='10' rows='5'  className='border border-black md:w-[500px] w-[400px] h-8 rounded px-2' />
                  <span className="text-red-500"><ErrorMessage name='message'/></span>
                </div>
                <div className="flex justify-center">
 
               <button type="submit" disabled={isSubmitting} className='mt-5'>Submit</button>
               </div>
                
             </Form>
              </div>
             )}
             </Formik>
            </div>
            
        </>
        
    )
}
export default ContactForm;