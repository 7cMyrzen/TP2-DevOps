db = db.getSiblingDB('blog_db');

db.createCollection("posts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "content", "author", "date"],
            properties: {
                title: { bsonType: "string" },
                content: { bsonType: "string" },
                author: { bsonType: "string" },
                date: { bsonType: "string" }
            }
        }
    }
});

db.posts.insertMany([
    { 
        title: "Mercedes Dominance in Early 2026 Season", 
        content: "The first three races of 2026 in Australia, China, and Japan have shown a clear advantage for Mercedes. The team has mastered the new 50-50 power split between ICE and electric energy. Rookie Kimi Antonelli is leading the standings, proving that the simulator data was correct about his pace.",
        author: "Paddock Insider",
        date: "2026-04-24"
    },
    { 
        title: "Active Aero Refinements: FIA Responds to Drivers", 
        content: "Following complaints about energy management during the first races, the FIA has updated the active aerodynamics regulations this April. The Straight Mode drag reduction has been tweaked to allow for better overtaking without excessive lift-and-coast strategies that frustrated drivers in Melbourne.",
        author: "Tech Specialist",
        date: "2026-04-20"
    },
    { 
        title: "The April Calendar Gap: Bahrain and Saudi Updates", 
        content: "The unusual gap in the April 2026 calendar due to the cancellation of the Middle Eastern rounds has allowed teams more time to refine their new chassis. Ferrari and McLaren are reportedly bringing massive upgrade packages to the next European rounds to bridge the gap to Mercedes.",
        author: "Race Reporter",
        date: "2026-04-15"
    },
    { 
        title: "Audi and Ford-Red Bull: The First Verdict", 
        content: "After the first quarter of the 2026 season, the new power unit manufacturers are showing different progress. While Audi has shown solid reliability in the Sauber chassis, the Ford-powered Red Bull has struggled slightly with battery deployment issues, leading to Max Verstappens recent frustrations.",
        author: "Engine Analyst",
        date: "2026-04-10"
    },
    { 
        title: "Cadillac F1 Team: A Strong Debut Year", 
        content: "The 11th team on the grid, Cadillac, has exceeded expectations in its debut season. Managed by Michael Andretti, the team has already scored points thanks to Valtteri Bottas. The American outfit is quickly becoming a serious midfield contender, putting pressure on established teams like Alpine and Haas.",
        author: "F1 Journalist",
        date: "2026-04-05"
    }
]);
