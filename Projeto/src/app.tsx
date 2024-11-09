import { ChangeEvent, useState } from "react";
import { AboutSection } from "./components/about";

export function App() {

    const [heroName, setHeroName] = useState('')
    const [heroExperience, setHeroExperience] = useState(0)
    const [heroRank, setHeroRank] = useState('')

    function handleHeroNameChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setHeroName(value);
    }

    function handleHeroExperienceChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.valueAsNumber;
        handleHeroRank(value);
        setHeroExperience(value);
    }

    function handleHeroRank(heroExperience: number) {
        const root = document.querySelector(':root') as HTMLElement;

        if(heroExperience <= 1000) { 
            setHeroRank('Ferro') 
            root.style.setProperty('--rankColor', '#545554');
        } 
        else if(heroExperience >= 1001 && heroExperience <= 2000) { 
            setHeroRank('Bronze'); 
            root.style.setProperty('--rankColor', '#966b18');
        } 
        else if(heroExperience >= 2001 && heroExperience <= 5000) { 
            setHeroRank('Prata'); 
            root.style.setProperty('--rankColor', '#8c9291');
        } 
        else if(heroExperience >= 5001 && heroExperience <= 7000) { 
            setHeroRank('Ouro');
            root.style.setProperty('--rankColor', '#FFB904');
        } 
        else if(heroExperience >= 7001 && heroExperience <= 8000) { 
            setHeroRank('Platina');
            root.style.setProperty('--rankColor', '#297184');
        } 
        else if(heroExperience >= 8001 && heroExperience <= 9000) { 
            setHeroRank('Ascendente');
            root.style.setProperty('--rankColor', '#6bce9a');
        } 
        else if(heroExperience >= 9001 && heroExperience <= 10000) { 
            setHeroRank('Imortal');
            root.style.setProperty('--rankColor', '#b02639');
        } 
        else { 
            setHeroRank('Radiante');
            root.style.setProperty('--rankColor', '#ffffa5');
        }
    }

    return (
    <div className="flex justify-center mx-4 max-w-full">
    <main className="max-w-[1376px] w-full mx-4 my-12 ">
        <div className="flex-1 flex flex-wrap justify-between gap-12">
            <div className="flex flex-wrap flex-1 gap-16 md:gap-32">
                <h1 className="font-[450] text-white text-5xl xl:text-6xl leading-[85px] max-w-96 xl:max-w-xl">Classificador de Nível de <span className="text-[var(--rankColor)]">Herói</span></h1>
                <form action="" className="flex flex-wrap gap-6 ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="formHeroName">Nome do Herói :</label>
                        <input className="select-none w-fit rounded-[8px] bg-inputColor border-2 border-borderColor h-12 px-4 placeholder:text-borderColor" 
                            name="formHeroName" id="formHeroName" 
                            type="text" 
                            placeholder="Nome:"
                            value={heroName}
                            onChange={handleHeroNameChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="formHeroExperience">Quantidade de XP do Herói :</label>
                        <input className="select-none h-12" 
                            name="formHeroExperience" id="formHeroExperience" 
                            type="range"
                            min={0}
                            max={12500}
                            title="Quantidade de XP"
                            value={heroExperience}
                            onChange={handleHeroExperienceChange}
                        />
                    </div>
                </form>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-12 my-6 md:min-w-72">
                <div className="size-36 md:size-48 border-4 border-borderColor bg-[var(--rankColor)] rounded-full" />
                <p className="text-xl text-balance text-center max-w-96">O Herói de nome 
                    <span className="text-[var(--rankColor)]"> {heroName || 'desconhecido'}</span> está no nível 
                    <span className="text-[var(--rankColor)]"> {heroRank || '???'}</span> possuindo {heroExperience} XP
                </p>
            </div>
        </div>

        <div className="border-2 border-borderColor rounded-md mt-16 mb-12" />

        <AboutSection />
    </main>
    </div>
    )
}