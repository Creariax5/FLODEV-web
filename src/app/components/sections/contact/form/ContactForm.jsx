import { ZapIcon } from 'lucide-react';
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import GradientButton from "@/app/components/UI/GradientButton";

const ContactForm = () => (
    <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Name', 'Email'].map((placeholder) => (
                <FormInput key={placeholder} placeholder={placeholder} type={placeholder.toLowerCase()} />
            ))}
        </div>
        <FormTextarea />
        <GradientButton text="Send Message" icon={<ZapIcon className="w-5 h-5" />} fullWidth />
    </form>
);

export default ContactForm;
