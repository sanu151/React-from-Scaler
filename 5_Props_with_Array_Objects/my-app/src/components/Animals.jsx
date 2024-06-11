import React from "react";
import MyAnimal from "./MyAnimal";

function Animals() {
  const animals = [
    {
      name: "Cat",
      desc: "Cats are a captivating mix of independence and companionship. These furry enigmas, with their soft fur and watchful eyes, have coexisted with humans for millennia. Despite their reputation for naps and lounging in sunbeams, cats are skilled hunters with a playful streak. Their sharp senses and lithe bodies make them natural predators, while their purrs and gentle head nudges reveal a capacity for affection. Whether curled up on a lap or stalking a dust bunny, cats bring a touch of grace and intrigue to our lives. ",
    },
    {
      name: "Dog",
      desc: `Dogs, with their wagging tails and playful spirit, have earned the nickname "man's best friend". These loyal companions come in a vast array of breeds, from the tiny Chihuahua to the giant Great Dane. Their intelligence and eagerness to please make them highly trainable, serving as everything from loyal pets to working partners. With a keen sense of smell and hearing, dogs can be invaluable guard animals or assist with search and rescue missions. But beyond their utility, dogs offer unconditional love and companionship, enriching the lives of countless humans around the world.`,
    },
    {
      name: "Horse",
      desc: `The horse, a majestic herbivore with a flowing mane and powerful legs, has been a companion to humanity for millennia. Domesticated from their wild ancestors, horses come in a dazzling array of colors and sizes, with each breed boasting unique strengths and temperaments. Once relied upon for transportation and labor, horses today are valued partners in equestrian sports, leisure riding, and even therapy programs. Their intelligence, trainability, and unwavering spirit continue to endear them to people around the world. `,
    },
  ];
  return (
    <div>
      {animals.map((animal) => (
        <MyAnimal name={animal.name} desc={animal.desc} />
      ))}
    </div>
  );
}

export default Animals;
