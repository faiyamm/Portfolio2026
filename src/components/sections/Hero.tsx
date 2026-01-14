import { RevealText } from '../ui/RevealText';

export const Hero = () => {
    return (
        <section id="Hero" className="layout-container min-h-screen flex flex-col justify-center pt-20">
            <div className="flex flex-col gap-6">
                <RevealText
                    tag="h1"
                    text="Hey, I'm Sofia"
                    className="text-8xl md:text-[10rem] font-bold text-white tracking-tighter"
                />

                <div className="text-5xl md:text-7xl text-white font-medium leading-[0.9] md:leading-[0.8] tracking-tighter">
                    <RevealText
                        tag="p"
                        text="Student."
                        delay={0.5}
                    />
                    <RevealText
                        tag="p"
                        text="Developer."
                        delay={0.7}
                    />
                    <RevealText
                        tag="p"
                        text="Making things"
                        delay={0.9}
                    />
                    <RevealText
                        tag="p"
                        text="work."
                        delay={1.1}
                    />
                </div>
            </div>
        </section>
    );
};
