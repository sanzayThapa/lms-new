import React from 'react';

const stories = [
    {
        quote: "SkillBest has completely revolutionized how we approach internal training. The platform is intuitive and the content quality is unmatched in Nepal.",
        author: "Sita Sharma",
        role: "HR Director, Global Tech Solutions",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        quote: "The analytics tools provided by SkillBest gave us the insights we needed to bridge the skill gaps in our operations team effectively.",
        author: "Rajesh Gupta",
        role: "Operations Manager, Everest Logistics",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        quote: "Our employees are more engaged than ever. The gamified learning approach has made a standard compliance training feel like an achievement.",
        author: "Binod Adhikari",
        role: "L&D Specialist, Nepal Finance Corp",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
];

const ClientStories = () => {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-base font-bold leading-7 text-skillRed uppercase tracking-widest mb-4 italic">Social Proof</h2>
                    <h3 className="text-4xl font-extrabold tracking-tight text-darkNavy sm:text-5xl">Impact Stories from <br /> leading organizations</h3>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {stories.map((story, index) => (
                        <div key={index} className="flex flex-col justify-between p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-skillBlue/5 transition-all duration-500">
                            <div className="absolute top-8 right-10 text-6xl text-slate-200 font-serif opacity-50 group-hover:text-skillRed transition-colors">"</div>

                            <div className="relative z-10">
                                <p className="text-xl leading-relaxed text-slate-700 font-medium mb-10 italic">
                                    {story.quote}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
                                <img src={story.image} alt={story.author} className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md" />
                                <div>
                                    <h4 className="font-bold text-darkNavy">{story.author}</h4>
                                    <p className="text-sm text-slate-500">{story.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientStories;
