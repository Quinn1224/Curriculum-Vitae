// Personal Information --> #hero section
export const name = "Verena Mennen"
export const designation = "Software Developer"
export const location = "Erlangen/Deutschland"
export const email = "verena.mennen@outlook.de"
export const tel = "0157 55181980"
export const address1 = "Marie-Curie-Str. 31"
export const address2 = "91052 Erlangen"

export const alter = "29"
export const familienstand = "ledig"
export const nationalität = "deutsch"
export const sprache_en = "Englisch - Verhandlungssicher in Wort und Schrift"
export const sprache_ch = "Chinesisch - HSK 1"
export const office = "Sicherer Umgang mit gängigen Office-Produkten und LaTeX"
export const aiUsage = "Effektiver Einsatz von KI-Modellen zur Produktivitätssteigerung in Softwareprojekten"

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
		Operation Manager Add-Ins, Klassendialoge & Hochrüstungen der Userklassen (Dialog & Datenbank), verschiedenste Datenverarbeitungsskripte in SQL, BOS Skripte uvm.`,

		
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
		+"Teilnahme an Schulungen zu Step 7 AWL, C#, SQL, Batch iT, etc. und Anwendung des erworbenen Wissens.",
	
	}, 
	{
		from: "2016",
		to: "2017",
		org: "LIFE Bildung Umwelt Chancengleichheit e.V.",
		org_url: "https://life-online.de/project/entertechnik/",
		role: "Technisches Jahrespraktikum in den Bereichen Laborgerätebau, Softwaretesting und Umwelttechnik",
		location: "Berlin",
		skills: "Einmessen & Referenzdatenerhebung von Prozessrefraktometern, Softwaretesting und handwerkliche Arbeiten im umwelttechnischen Bereich.",
	
	}, 
	{
		from: "2016",
		to: "2021",
		role: "Diverse Neben- und Saisonjobs neben Studium und Arbeit in Taschenproduktion, Einzelhandel, Möbelbau und E-Commerce",
		skills: "Handwerkliches & Arbeiten rund um Bestellprozesse sowie kleine Automatisierungen mit Google Apps Script.",
		last_row: 'true'
	}, 
]

// Projects --> #project section
export const projects = [
	{
		title: "Merchandise Shop - aktuell in Entwicklung",
		description: "Ein Online Shop um Merchandise der Erlangen Rebels zu verkaufen. Die Produkte & Bestellungen sind über eine Administrationsoberfläche ohne Programmierkenntnisse frei konfigurierbar & verwaltbar.",
		languages: "Python mit Framework Django, HTML & CSS",
		url: "https://shop.erlangenrebels.duckdns.org/",
		url_name: "Zur Website",
		tech: "Konfiguration eines Webservers mit nginx, Docker, Versions- & Release Management mit Git, Zertifikatsmanagement mit Certbot. Anbindung SendGrid für E-Mail Versand, Domain für Entwicklungsphase per DuckDNS.",
	},
	{
		title: "Football Quiz - aktuell in Entwicklung",
		description: "Ein Quiz mit dem Regelwerk und Playbook meines American Football Teams gelernt werden können. "
		+"Fragen, Kategorien und Testgruppen sind in einer Administrationsfläche frei konfigurierbar. Es existieren unterschiedliche Fragetypen (z. B. Multiple Choice mit Text & Bild)."
		+"Spieler*innen erhalten Punkte, Statistik und Einblick in ein Teaminternes Leaderboard. Das Quiz verfügt über ein Nutzermanagement mit Authentifizierung.",
		languages: "Python mit Framework Django, HTML, CSS",
		url: "https://quiz.erlangenrebels.duckdns.org",
		url_name: "Zur Website",
		tech: "Konfiguration eines Webservers mit nginx, Docker, Versions- & Release Management mit Git, Zertifikatsmanagement mit Certbot, Domain für Entwicklungsphase per DuckDNS. ",
	},
	{
		title: "Youtube Cleaner",
		description: "Ein kleines Firefox Add-In um Youtube Shorts, Playables und den \"Von Youtube Empfohlen\"-Bereich auszublenden",
		languages: "JavaScript",
		url: "https://github.com/Quinn1224/Youtube-Cleaner",
		url_name: "Zum Quellcode",
		tech: "Mozilla Firefox Add-In Verwaltung & Release, Git zur Versionierung",
	},
	{
		title: "Fitnesstracker Syncronizer",
		description: "Skripte um Daten zwischen Fitnessanwendungen zu synchronisieren und per Plotly miteinander in Verbindung zu setzen",
		languages: "Python, Automatisierung per Cron \& Incrond",
		url_name: "Noch nicht veröffentlicht",
		tech: "Git zur Versionierung",
	},
	{
		title: "Diverse weitere kleine Softwaretools & Minispiele",
		description: "App-Entwicklung mit C# und .NET Maui, Entwicklung eines Idle Games & Lehrsimulator Launchers in Godot 4 im Rahmen eines Uni Projekts, Erstellung dieser Website mit Astro, DHL Versandstatusabfrage als CLI-Tool, uvm.",
		languages: "C# & .NET Maui sowie WPF, Godot 4, Java & JavaFX, ...",
		last_row: 'true'
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
		url: "https://www.fau.de/studiengang/informatik-b-sc/"	
	},
	{
		from: "2017",
		to: "2021",
		institute: "Hochschule Osnabrück",
		course: "Bioverfahrenstechnik in Agrar- und Lebensmittelwirtschaft (B.Sc.) - Schwerpunkt Konzeption und Nutzung biotechnologischer Anlagen",
		thesis: "Untersuchung prozessrelevanter Einflussfaktoren auf das rheologische Verhalten von Bierhefeextraktpasten.",
		grade: "Abschlussnote: 1.9",
		location: "Osnabrück",
		url: "https://www.hs-osnabrueck.de/studium/studienangebot/bachelor/bioverfahrenstechnik-in-agrar-und-lebensmittelwirtschaft-bsc/"	
	},
	{
		from: "2008",
		to: "2016",
		institute: "Hannah Arendt Gymnasium",
		course: "Abitur (Allgemeine Hochschulreife)",
		grade: "Abschlussnote: 1.9",
		url: "https://www.hag-lengerich.de/",
		location: "Lengerich",
		last_row: 'true'
	}
]

// Projects --> #project section
export const hobbies = [
	{
		title: "American Football",
		description: "Ich spiele seit 2 Jahren bei den TB Rebels in Erlangen. Die Football-Seite auf der Website des Sportvereins ist ebenfalls von mir gestaltet.",
		institute: "Turnerbund Erlangen",
		url: "https://turnerbund.de/football/",
		tech: "Wordpress",
	},
	{
		title: "Krafttraining, Rennrad fahren, etc.",
		description: "Regelmäßiges Training im Gym & Fahrradtouren",
	},
	{
		title: "Linux-vServer & Self-Hosting",
		description: "Aktuell richte ich einen Linux-vServer mit verschiedenen selbst gehosteten Diensten ein, darunter Gitea, Nextcloud, Vaultwarden, Nutritrace, etc.",
	},
	{
		title: "Geschichtliche",
		description: "Allgemeines geschichtliches Interesse, insbesondere 20. Jhd",
		last_row: 'true'
	},
]


