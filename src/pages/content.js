// Personal Information --> #hero section
export const name = "Verena Mennen"
export const designation = "Software Developer"
export const location = "Erlangen/Deutschland"
export const email = "verena.mennen@outlook.de"
export const tel = "0157 55181980"
export const address1 = "Marie-Curie-Str. 31"
export const address2 = "91052 Erlangen"

// Work Experience --> #work section
export const work = [
	{
		from: "2023",
		to: "heute",
		role: "Project Engineer",
		org: "ProLeiT",
		org_url: "https://www.proleit.de/",
		location: "Herzogenaurach",
		skills: `Kundenspefifische Softwarelösungen sowie Standardisierung im Plant iT System mit Schwerpunkt C#/WPF und SQL.\n
		Operation Manager Add-Ins, Klassendialoge & Hochrüstungen der Userklassen (Dialog & Datenbank), verschiedenste Datenverarbeitungsskripte in SQL, BOS Skripte uvm.`
		
	}, 
	{
		from: "2001",
		to: "2023",
		role: "Trainee Software Application Engineer",
		org: "ProLeiT",
		org_url: "https://www.proleit.de/",
		location: "Herzogenaurach",
		skills: "Schwerpunkt MES & Hochsprachen. Mitarbeit an Softwareprojekten im Bereich Datenbanken, Schnittstellen, Erstellung von Hochrüstungspaketen (Update iT's) für Automatisierungsklassen, "
		+"Bediendialoge für zahlreiche Userklassen.\n "
		+"Teilnahme an Schulungen zu Step 7 AWL, C#, SQL, Batch iT, etc. und Anwendung des erworbenen Wissens."
	}, 
	{
		from: "2016",
		to: "2017",
		role: "Technisches Jahrespraktikum in den Bereichen Laborgerätebau, Softwaretesting und Umwelttechnik",
		location: "Berlin",
		skills: "Einmessen & Referenzdatenerhebung von Prozessrefraktometern, Softwaretesting und handwerkliche Arbeiten im umwelttechnischen Bereich."
	}, 
	{
		from: "2016",
		to: "2021",
		role: "Diverse Aushilfs- und Saisonjobs neben Studium und Arbeit in Taschenproduktion, Einzelhandel, Möbelbau und E-Commerce",
		skills: "Handwerkliches & Arbeiten rund um Bestellprozesse sowie kleine Automatisierungen mit Google Apps Script."
	}, 
]

// Projects --> #project section
export const projects = [
	{
		title: "Merchandise Shop - aktuell in Entwicklung",
		description: "Ein Online Shop um Merchandise der Erlangen Rebels zu verkaufen. Die Produkte & Bestellungen sind über eine Administrationsoberfläche ohne Programmierkenntnisse frei konfigurierbar & verwaltbar.",
		languages: "Python mit Framework Django, HTML & CSS",
		url: "https://shop.erlangenrebels.duckdns.org/",
		tech: "Konfiguration eines Webservers mit nginx, Docker, Versions- & Release Management mit Git, Zertifikatsmanagement mit Certbot. Anbindung SendGrid für E-Mail Versand, Domain für Entwicklungsphase per DuckDNS.",
	},
	{
		title: "Football Quiz - aktuell in Entwicklung",
		description: "Ein Quiz mit dem Regelwerk und Playbook meines American Football Teams gelernt werden können. "
		+"Fragen, Kategorien und Testgruppen sind in einer Administrationsfläche frei konfigurierbar. Es existieren unterschiedliche Fragetypen (z. B. Multiple Choice mit Text & Bild)."
		+"Spieler*innen erhalten Punkte, Statistik und Einblick in ein Teaminternes Leaderboard. Das Quiz verfügt über ein Nutzermanagement mit Authentifizierung.",
		languages: "Python mit Framework Django, HTML, CSS",
		url: "https://quiz.erlangenrebels.duckdns.org",
		tech: "Konfiguration eines Webservers mit nginx, Docker, Versions- & Release Management mit Git, Zertifikatsmanagement mit Certbot, Domain für Entwicklungsphase per DuckDNS. ",
	},
	{
		title: "Youtube Shorts Remover",
		description: "Ein kleines Firefox Add-In um Youtube Shorts & Playables auszublenden",
		languages: "JavaScript",
		url: "https://github.com/Quinn1224/Youtube-Shorts-Remover",
		tech: "Mozilla Firefox Add-In Verwaltung & Release, Git zur Versionierung",
	},
	{
		title: "Scale Data Extractor",
		description: "Skripte um die BLE Datenpakete einer Xiaomi S400 Waage auszulesen und mit Plotly anschließend grafisch aufzubereiten. Historische Daten können über eine API ebenfalls vollständig abgefragt & visualisiert werden.",
		languages: "Python",
		url: "",
		tech: "Git zur Versionierung",
	},
	{
		title: "Diverse weitere kleine Softwaretools & Minispiele",
		description: "App-Entwicklung mit C# und .NET Maui, Entwicklung eines Idle Games in Godot 4, Erstellung dieser Website mit Astro, uvm.",
		languages: "C# & .NET Maui sowie WPF, Godot 4, Java & JavaFX, ...",
	}
]

// Education --> #education section
export const education = [
	{
		from: "2023",
		to: "vrs. Mitte 2027",
		institute: "FAU Erlangen",
		course: "Informatik (B.Sc.)",
		grade: "Aktueller Durchschnitt: 2.1",
		location: "Erlangen",	
		url: "https://www.fau.de/"	
	},
	{
		from: "2017",
		to: "2021",
		institute: "Hochschule Osnabrück",
		course: "Bioverfahrenstechnik in Agrar- und Lebensmittelwirtschaft (B.Sc.)",
		thesis: "Untersuchung prozessrelevanter Einflussfaktoren auf das rheologische Verhalten von Bierhefeextraktpasten.",
		grade: "Abschlussnote: 1.9",
		location: "Osnabrück",
		url: "https://www.hs-osnabrueck.de/"	
	},
	{
		from: "2008",
		to: "2016",
		institute: "Hannah Arendt Gymnasium",
		course: "Abitur (Allgemeine Hochschulreife)",
		grade: "Abschlussnote: 1.9",
		location: "Lengerich"
	}
]

// Projects --> #project section
export const hobbies = [
	{
		title: "American Football",
		description: "Ich spiele seit 2 Jahren bei den TB Rebels in Erlangen. Die Football-Seite auf der Website des Sportvereins ist ebenfalls von mir :)",
		institute: "Turnerbund Erlangen",
		url: "https://turnerbund.de/football/",
		tech: "Wordpress",
	},
	{
		title: "Krafttraining, Rennrad fahren, Wandern im Sommer, etc.",
		description: "Regelmäßiges Training im Gym & Fahrradtouren",
	},  
]




