const ServiceCard = ({ icon, title, description }) => (
    <div className="group relative">
        <div className="absolute inset-0.5 custom-bg rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-gray-900 p-8 rounded-2xl h-full">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r custom-bg flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

export default ServiceCard;
