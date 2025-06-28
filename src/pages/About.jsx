import React from 'react';
import project1 from "../assets/images/proj5.png";
import project2 from "../assets/images/proj6.png";

export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">
                About <span className="text-emerald-300">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">01. Background</h3>
                    <p className="text-white/50 mb-6">
                        I'm a passionate Full-stack developer with a strong foundation in computer science and a love for creating innovative web solutions. My journey in tech started with a curiosity about how things work, which led me to pursue a career in web development.
                    </p>

                    <div className="rounded-lg p-4 mb-4 border border-white/20">
                        <code className="text-emerald-200">
                            const skills = [<br />
                            &nbsp;&nbsp;'JavaScript',
                            <br />
                            &nbsp;&nbsp;'React',
                            <br />
                            &nbsp;&nbsp;'Node.js',
                            <br />
                            &nbsp;&nbsp;'Python',
                            <br />
                            &nbsp;&nbsp;'SQL',
                            <br />
                            &nbsp;&nbsp;'Mongodb',
                            <br />
                            &nbsp;&nbsp;'AWS',
                            <br />
                            ];
                        </code>
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">02.Expertise</h3>
                    <p className="text-white/50">
                        I specialize in building robost and scalable web application using modern technologies. My expertise spans both foent-end and back-end development, allowing me to create seamless, end-to-end solutions.
                    </p>
                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
                        <img src={project1} alt="Project 1" className="absolute w-full h-full insert-0 object-cover" />
                    </div>

                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">03.Skills</h3>
                    <p className="text-white/50">
                        I'm proficient in wide range of technologies and constantly expanding my skill set to stay at the forefront of web development.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>React/Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Python</li>
                                <li>Node.js</li>
                                <li>SQL</li>
                                <li>MySQL</li>
                                <li>Mongodb</li>
                                <li>AWS</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Web Scraping</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Python</li>
                                <li>request</li>
                                <li>Beautiful soup</li>
                                <li>selenium</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Front-end</label>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Back-end</label>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Web Scrapping</label>
                            <div className="w-full bg-white/10 h-2 rounded-full">
                                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">04.Approch</h3>
                    <p className="text-white/50">
                        I believe in writing clean, maintainable code and following best practices. My approach involves understanding client needs, planning throughly and delivering high-quality solutions on time.
                    </p>
                </div>
                <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
                    <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
                        <img src={project2} alt="Project 2" className="absolute w-full h-full insert-0 object-cover" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-2 mt-4">05.Goals</h3>
                        <p className="text-white/50">
                            My goal is to continue growing as a developer, tackling challenges projects and contributing to the tech community. I'm always excited to learn new technologies and push the boundries of what's possible in web development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
