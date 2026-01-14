const educationData = [
    {
        school: "UNIVERSIDAD AUTÓNOMA DE BAJA CALIFORNIA",
        period: "Feb 2022 - Present | Tijuana, México",
        description: "Pursuing a B.S. in Software Engineering and Emerging Technologies with a focus on Web Development and Full-Stack Development."
    },
    {
        school: "SAN DIEGO GLOBAL KNOWLEDGE UNIVERSITY",
        period: "Nov 2025 - Present | San Diego, CA (Remote)",
        description: "Participating in an intensive Mobile Development program focused on the iOS ecosystem, specializing in Apple programming languages and mobile software architectures."
    }
]

export const Education = () => {
    return (
        <section className="layout-container min-h-screen flex flex-col justify-center pt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                Education
            </h2>

            <div className="flex flex-col gap-6 mt-10">
                {educationData.map((education, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col gap-4 border border-white/5"
                    >
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                                {education.school}
                            </h3>
                            <span className="text-neutral-200 text-xs font-medium lg:text-right">
                                {education.period}
                            </span>
                        </div>
                        <p className="text-neutral-300 leading-relaxed font-normal text-sm">
                            {education.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};
