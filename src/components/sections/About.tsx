import { RevealText } from '../ui/RevealText';

export const About = () => {
    return (
        <section id="About" className="layout-container min-h-screen flex flex-col justify-center pt-20">
            <div className="flex flex-col gap-6">
                <RevealText
                    tag="h2"
                    text="What Drives Me?"
                    className="text-5xl md:text-6xl font-bold text-white tracking-tighter"
                />
                <RevealText
                    tag="p"
                    text="I build web solutions with a simple goal: to make life easier for those around me. I'm passionate about creating secure, accessible, and intuitive systems that turn complex challenges into simple, seamless experiences. I believe the best technology is invisible, a reliable tool that just works."
                    className="text-white/90 text-2xl md:text-5xl font-medium leading-[0.9] md:leading-[0.8] tracking-tighter"
                    delay={0.1}
                />
            </div>
        </section>
    );
};
