
export const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10">
            <div className="layout-container flex flex-col min-h-[50vh]">

                <div className="flex-grow flex flex-col justify-center items-center text-center space-y-8">
                    <h2 className="text-xl md:text-2xl text-white max-w-2xl font-medium leading-relaxed">
                        Got a question, proposal or project or want to work together on something? Feel free to reach out.
                    </h2>

                    <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="text-white text-2xl md:text-4xl font-bold hover:text-[var(--color-primary-400)] transition-colors duration-300">
                        {import.meta.env.VITE_EMAIL}
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm text-white/90 font-medium">
                    <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
                    <p>Designed and built by Sofia Perez</p>
                </div>
            </div>
        </footer>
    );
};
