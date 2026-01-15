import { RevealText } from '../ui/RevealText';

export const About = () => {
    return (
        <section id="About" className="layout-container min-h-screen flex flex-col justify-center pt-20">
            <div className="flex flex-col gap-6">
                <RevealText
                    tag="h2"
                    text="What Drives Me?"
                    className="text-5xl md:text-6xl font-bold text-white tracking-tighter"
                    stagger={0.05}
                    duration={0.3}
                />
                <RevealText
                    tag="p"
                    text="I build web solutions with a simple goal: to make life easier for those around me. I'm passionate about creating secure, accessible, and intuitive systems that turn complex challenges into simple, seamless experiences. I believe the best technology is invisible, a reliable tool that just works."
                    className="text-white/90 text-2xl md:text-5xl font-medium leading-[0.9] md:leading-[0.8] tracking-tighter"
                    delay={0.1}
                    stagger={0.02}
                    duration={0.4}
                />
            </div>
        </section>
    );
};
