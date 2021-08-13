// sceneData {
//  "Film": 
//
//
//
//PROBABLY NOT USING THIS CONVERTED CSV TO JSON INSTEAD
// }

const sceneData = 

[
    "Film",
    "URL Encoded name",
    "Director/Filmmaker IMDB Link",
    "Location Display Text",
    "LATITUDE",
    "LONGITUDE",
    "Borough",
    "Neighborhood",
    "IMDB LINK"
]

let filmTitle = 

`*batteries not included
12 Angry Men
13 Going on 30
15 Minutes
25th Hour
25th Hour
A Perfect Murder
A Thousand Clowns
Across the Sea of Time
After Hours
Alice
American Psycho
An Unmarried Woman
Annie Hall
Annie Hall
Annie Hall
Annie Hall
Annie Hall
Arthur
As Good As It Gets
Barefoot in the Park
Barefoot in the Park
Basquiat
Bed of Roses
BIG
Blue in the Face
Breakfast at Tiffany's
Breakfast at Tiffany's
Breakfast at Tiffany's
Broadway Danny Rose
Cagney & Lacey
Center Stage
Chasing Amy
Chelsea Walls
Clockers
Coogan's Bluff
Cotton Comes to Harlem
Crocodile Dundee
Crocodile Dundee II
Crooklyn
Crossing Delancey
Cruising
Cruising
Death to Smoochy
Death Wish
Desperately Seeking Susan
Desperately Seeking Susan
Die Hard: With a Vengeance
Do the Right Thing
Dog Day Afternoon
Downtown 81 / New York Beat Movie
Downtown 81 / New York Beat Movie
Eternal Sunshine of the Spotless Mind*
Fame
Fame
Ferry Tales
Force of Evil
Fort Apache the Bronx
Ghostbusters
Ghostbusters
Godspell
Godspell
Godspell
Godspell
Godspell
Godspell
Godspell
Godspell
Godzilla
Goodfellas
Green Card
Greetings
Hair
Hannah and Her Sisters
Hannah and Her Sisters
Hannah and Her Sisters
Heights
Hitch
Hudson Hawk
I Like It Like That
I Shot Andy Warhol
Inside Man
It Could Happen to You
Jeremy
Jumpin' at the Boneyard
Jungle Fever
Jungle Fever
Kids
Killer's Kiss
King Kong
Kissing Jessica Stein
Klute
Klute
Klute
Kojak
Kojak
Kramer vs. Kramer
Law & Order
Little Fugitive
Little Manhattan
LUV
Mad Hot Ballroom
Malcolm X
Man Push Cart
Manhattan
Marty
McCloud
Mean Streets
Men in Black
Men in Black
Men in Black
Men in Black
Midnight Cowboy
Midnight Cowboy
Mirage
Mo' Better Blues
My Dinner with André
New Jack City
Next Stop, Greenwich Village
Nighthawks
No Way to Treat a Lady
No Way to Treat a Lady
North by Northwest
On the Town
On the Waterfront
One Fine Day
One Fine Day
Other People's Money
Pieces of April
Plaza Suite
Prime
Ragtime
Report to the Commissioner
Requiem for a Dream
Rosemary's Baby
Rosemary's Baby
Rosemary's Baby
Saturday Night Fever
Saturday Night Fever
Searching for Bobby Fischer
Serpico
Sesame Street
Sex and the City
Shadows
Shaft
Shaft
She's the One
Single White Female
Six Degrees of Separation
Six Degrees of Separation
Sleepers
Sleepers
Smithereens
Smoke
Sophie's Choice
Spider-Man
Spider-Man
Spider-Man
Splash
State of Grace
Sugar Hill
Summer of Sam
Sweet Home Alabama
Sweet November
Sweet Smell of Success
Taxi Driver
Taxi Driver
Taxi Driver
The Anderson Tapes
The April Fools
The April Fools
The Basketball Diaries 
The Bonfire of the Vanities
The Brother from Another Planet
The Brothers McMullen**
The Cotton Club**
The Cowboy Way**
The Devil's Advocate**
The Fisher King**
The French Connection**
The Godfather Part II**
The Honeymooners**
The Hours**
The Interpreter**
The Landlord**
The Landlord**
The Late Show with David Letterm
The Lost Weekend
The Naked City
The Night They Raided Minsky's 
The Out-of-Towners
The Panic in Needle Park
The Pawnbroker
The Pickle 
The Pick-Up Artist
The Prisoner of Second Avenue
The Producers
The Producers
The Producers
The Professional
The Royal Tenenbaums
The Seven Year Itch
The Siege
The Sopranos
The Squid and the Whale
The Taking of Pelham One Two Three
The Warriors
The Warriors
The Wiz
The Wrong Man
Three Days of the Condor
Times Square
Tootsie
Two for the Seesaw
Up the Down Staircase
Up the Sandbox
Up the Sandbox
Uptown Girls
Vanilla Sky
Wall Street
Wall Street
West Side Story
West Side Story
Wolfen
Wolfen
Wolfen
Working Girl
You're a Big Boy Now
You're a Big Boy Now
You've Got Mail
You've Got Mail`

let URLEncodedName=

`%2Abatteries%20not%20included
12%20Angry%20Men
13%20Going%20on%2030
15%20Minutes
25th%20Hour
25th%20Hour
A%20Perfect%20Murder
A%20Thousand%20Clowns
Across%20the%20Sea%20of%20Time
After%20Hours
Alice
American%20Psycho
An%20Unmarried%20Woman
Annie%20Hall
Annie%20Hall
Annie%20Hall
Annie%20Hall
Annie%20Hall
Arthur
As%20Good%20As%20It%20Gets
Barefoot%20in%20the%20Park
Barefoot%20in%20the%20Park
Basquiat
Bed%20of%20Roses
BIG
Blue%20in%20the%20Face
Breakfast%20at%20Tiffany%27s
Breakfast%20at%20Tiffany%27s
Breakfast%20at%20Tiffany%27s
Broadway%20Danny%20Rose
Cagney%20%26%20Lacey
Center%20Stage
Chasing%20Amy
Chelsea%20Walls
Clockers
Coogan%27s%20Bluff
Cotton%20Comes%20to%20Harlem
Crocodile%20Dundee
Crocodile%20Dundee%20II
Crooklyn
Crossing%20Delancey
Cruising
Cruising
Death%20to%20Smoochy
Death%20Wish
Desperately%20Seeking%20Susan
Desperately%20Seeking%20Susan
Die%20Hard%3A%20With%20a%20Vengeance
Do%20the%20Right%20Thing
Dog%20Day%20Afternoon
Downtown%2081%20%2F%20New%20York%20Beat%20Movie
Downtown%2081%20%2F%20New%20York%20Beat%20Movie
Eternal%20Sunshine%20of%20the%0Spotless%20Mind
Fame
Fame
Ferry%20Tales
Force%20of%20Evil
Fort%20Apache%20the%20Bronx
Ghostbusters
Ghostbusters
Godspell
Godspell
Godspell
Godspell
Godspell
Godspell
Godspell
Godspell
Godzilla
Goodfellas
Green%20Card
Greetings
Hair
Hannah%20and%20Her%20Sisters
Hannah%20and%20Her%20Sisters
Hannah%20and%20Her%20Sisters
Heights
Hitch
Hudson%20Hawk
I%20Like%20It%20Like%20That
I%20Shot%20Andy%20Warhol
Inside%20Man
It%20Could%20Happen%20to%20You
Jeremy
Jumpin%27%20at%20the%20Boneyard
Jungle%20Fever
Jungle%20Fever
Kids
Killer%27s%20Kiss
King%20Kong
Kissing%20Jessica%20Stein
Klute
Klute
Klute
Kojak
Kojak
Kramer%20vs%2E%20Kramer
Law%20%26%20Order
Little%20Fugitive
Little%20Manhattan
LUV
Mad%20Hot%20Ballroom
Malcolm%20X
Man%20Push%20Cart
Manhattan
Marty
McCloud
Mean%20Streets
Men%20in%20Black
Men%20in%20Black
Men%20in%20Black
Men%20in%20Black
Midnight%20Cowboy
Midnight%20Cowboy
Mirage
Mo%27%20Better%20Blues
My%20Dinner%20with%20Andr%E9
New%20Jack%20City
Next%20Stop%2C%20Greenwich%20Village
Nighthawks
No%20Way%20to%20Treat%20a%20Lady
No%20Way%20to%20Treat%20a%20Lady
North%20by%20Northwest
On%20the%20Town
On%20the%20Waterfront
One%20Fine%20Day
One%20Fine%20Day
Other%20People%27s%20Money
Pieces%20of%20April
Plaza%20Suite
Prime
Ragtime
Report%20to%20the%20Commissioner
Requiem%20for%20a%20Dream
Rosemary%27s%20Baby
Rosemary%27s%20Baby
Rosemary%27s%20Baby
Saturday%20Night%20Fever
Saturday%20Night%20Fever
Searching%20for%20Bobby%20Fischer
Serpico
Sesame%20Street
Sex%20and%20the%20City
Shadows
Shaft
Shaft
She%27s%20the%20One
Single%20White%20Female
Six%20Degrees%20of%20Separation
Six%20Degrees%20of%20Separation
Sleepers
Sleepers
Smithereens
Smoke
Sophie%27s%20Choice
Spider%2DMan
Spider%2DMan
Spider%2DMan
Splash
State%20of%20Grace
Sugar%20Hill
Summer%20of%20Sam
Sweet%20Home%20Alabama
Sweet%20November
Sweet%20Smell%20of%20Success
Taxi%20Driver
Taxi%20Driver
Taxi%20Driver
The%20Anderson%20Tapes
The%20April%20Fools
The%20April%20Fools
The%20Basketball%20Diaries%20
The%20Bonfire%20of%20the%20Vanities
The%20Brother%20from%20Another%20Plane
The%20Brothers%20McMullen
The%20Cotton%20Club
The%20Cowboy%20Way
The%20Devil%27s%20Advocate
The%20Fisher%20King
The%20French%20Connection
The%20Godfather%20Part%20II
The%20Honeymooners
The%20Hours
The%20Interpreter
The%20Landlord
The%20Landlord
The%20Late%20Show%20with%20David%20Letterma
The%20Lost%20Weekend
The%20Naked%20City
The%20Night%20They%20Raided%20Minsky%27s%20
The%20Out%2Dof%2DTowners
The%20Panic%20in%20Needle%20Park
The%20Pawnbroker
The%20Pickle%20
The%20Pick%2DUp%20Artist
The%20Prisoner%20of%20Second%20Avenue
The%20Producers
The%20Producers
The%20Producers
The%20Professional
The%20Royal%20Tenenbaums
The%20Seven%20Year%20Itch
The%20Siege
The%20Sopranos
The%20Squid%20and%20the%20Whale
The%20Taking%20of%20Pelham%20One%20Two%20Three
The%20Warriors
The%20Warriors
The%20Wi
The%20Wrong%20Ma
Three%20Days%20of%20the%20Condo
Times%20Squar
Tootsi
Two%20for%20the%20Seesa
Up%20the%20Down%20Staircas
Up%20the%20Sandbo
Up%20the%20Sandbo
Uptown%20Girl
Vanilla%20Sk
Wall%20Stree
Wall%20Stree
West%20Side%20Stor
West%20Side%20Stor
Wolfe
Wolfe
Wolfe
Working%20Gir
You%27re%20a%20Big%20Boy%20Now
You%27re%20a%20Big%20Boy%20Now
You%27ve%20Got%20Mail
You%27ve%20Got%20Mail`

let directorIMDBLink =
`http://imdb.com/name/nm0730422/
http://imdb.com/name/nm0001486/
http://imdb.com/name/nm0935095/
http://imdb.com/name/nm0381273/
http://www.imdb.com/name/nm0000490/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0001112/
http://imdb.com/name/nm0168641/
http://imdb.com/name/nm0522844/
http://imdb.com/name/nm0000217/
http://www.imdb.com/name/nm0000095/
http://www.imdb.com/name/nm0366004/
http://imdb.com/name/nm0005196/
http://www.imdb.com/name/nm0000095/
http://www.imdb.com/name/nm0000095/
http://www.imdb.com/name/nm0000095/
http://www.imdb.com/name/nm0000095/
http://www.imdb.com/name/nm0000095/
http://imdb.com/name/nm0330619/
http://imdb.com/name/nm0000985/
http://imdb.com/name/nm0757256/
http://imdb.com/name/nm0757256/
http://imdb.com/name/nm0773603/
http://imdb.com/name/nm0325533/
http://imdb.com/name/nm0001508/
http://imdb.com/name/nm0000808/,http://imdb.com/name/nm0911061/
http://imdb.com/name/nm0001175/
http://imdb.com/name/nm0001175/
http://imdb.com/name/nm0001175/
http://www.imdb.com/name/nm0000095/
http://imdb.com/name/nm0042853/,http://imdb.com/name/nm0179400/,http://imdb.com/title/tt0083395/fullcredits#writers
http://imdb.com/name/nm0405336/
http://imdb.com/name/nm0003620/
http://imdb.com/name/nm0000160/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0796923/
http://imdb.com/name/nm0001115/
http://imdb.com/name/nm0265363/
http://imdb.com/name/nm0180259/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0798717/
http://imdb.com/name/nm0001243/
http://imdb.com/name/nm0001243/
http://imdb.com/name/nm0000362/
http://imdb.com/name/nm0935382/
http://imdb.com/name/nm0782384/
http://imdb.com/name/nm0782384/
http://imdb.com/name/nm0001532/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0001486/
http://imdb.com/name/nm0078166/
http://imdb.com/name/nm0078166/
http://imdb.com/name/nm0327273/
http://imdb.com/name/nm0000570/
http://imdb.com/name/nm0000570/
http://imdb.com/name/nm1534515/
http://imdb.com/name/nm0689796/
http://imdb.com/name/nm0677951/
http://imdb.com/name/nm0718645/
http://imdb.com/name/nm0718645/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0338719/
http://imdb.com/name/nm0000386/
http://imdb.com/name/nm0000217/
http://imdb.com/name/nm0001837/
http://imdb.com/name/nm0000361/
http://imdb.com/name/nm0001232/
http://www.imdb.com/name/nm0000095/
http://www.imdb.com/name/nm0000095/
http://www.imdb.com/name/nm0000095/
http://imdb.com/name/nm0006516/
http://imdb.com/name/nm0855035/
http://imdb.com/name/nm0499724/
http://imdb.com/name/nm0552140/
http://www.imdb.com/name/nm0366004/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0000921/
http://imdb.com/name/nm0057634/
http://imdb.com/name/nm0822863/
http://www.imdb.com/name/nm0000490/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0164187/
http://imdb.com/name/nm0000040/
http://imdb.com/name/nm0347086/
http://imdb.com/name/nm0379237/
http://imdb.com/name/nm0001587/
http://imdb.com/name/nm0001587/
http://imdb.com/name/nm0001587/
http://imdb.com/name/nm0542631/,http://imdb.com/title/tt0069599/fullcredits#writers
http://imdb.com/name/nm0542631/,http://imdb.com/title/tt0069599/fullcredits#writers
http://imdb.com/name/nm0000914/
http://imdb.com/name/nm0937725/,http://imdb.com/title/tt0098844/fullcredits#writers
http://imdb.com/name/nm0257129/,http://imdb.com/name/nm0257129/,http://imdb.com/title/tt0046004/fullcredits#directors
http://imdb.com/name/nm0505662/
http://imdb.com/name/nm0232795/
http://imdb.com/name/nm1802009/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm1023919/
http://www.imdb.com/name/nm0000095/
http://imdb.com/name/nm0542720/
http://imdb.com/name/nm0031398/,http://imdb.com/name/nm0000791/,http://imdb.com/title/tt0065317/fullcredits#writers
http://imdb.com/name/nm0000217/
http://imdb.com/name/nm0001756/
http://imdb.com/name/nm0001756/
http://imdb.com/name/nm0001756/
http://imdb.com/name/nm0001756/
http://imdb.com/name/nm0772259/
http://imdb.com/name/nm0772259/
http://imdb.com/name/nm0229424/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0001501/
http://imdb.com/name/nm0005522/
http://imdb.com/name/nm0005196/
http://imdb.com/name/nm0540330/
http://imdb.com/name/nm0806915/
http://imdb.com/name/nm0806915/
http://imdb.com/name/nm0000033/
http://imdb.com/name/nm0002045/,http://imdb.com/name/nm0000037/
http://imdb.com/name/nm0001415/
http://imdb.com/name/nm0001355/
http://imdb.com/name/nm0001355/
http://imdb.com/name/nm0422484/
http://imdb.com/name/nm0373282/
http://imdb.com/name/nm0002137/
http://imdb.com/name/nm0950226/
http://imdb.com/name/nm0001232/
http://imdb.com/name/nm0441501/
http://imdb.com/name/nm0004716/
http://imdb.com/name/nm0000591/
http://imdb.com/name/nm0000591/
http://imdb.com/name/nm0000591/
http://imdb.com/name/nm0000824/
http://imdb.com/name/nm0000824/
http://imdb.com/name/nm0001873/
http://imdb.com/name/nm0001486/
http://imdb.com/name/nm0177760/,http://www.imdb.com/title/tt0063951/fullcredits#writers
http://imdb.com/name/nm0823015/,http://www.imdb.com/title/tt0159206/fullcredits#writers
http://imdb.com/name/nm0001023/
http://imdb.com/name/nm0662953/
http://imdb.com/name/nm0005436/
http://imdb.com/name/nm0122653/
http://imdb.com/name/nm0775447/
http://imdb.com/name/nm0770961/
http://imdb.com/name/nm0770961/
http://imdb.com/name/nm0001469/
http://imdb.com/name/nm0001469/
http://imdb.com/name/nm0782384/
http://imdb.com/name/nm0911061/
http://imdb.com/name/nm0001587/
http://www.imdb.com/name/nm0000600/
http://www.imdb.com/name/nm0000600/
http://www.imdb.com/name/nm0000600/
http://imdb.com/name/nm0000165/
http://imdb.com/name/nm0423333/
http://imdb.com/name/nm0406687/
http://www.imdb.com/name/nm0000490/
http://imdb.com/name/nm0855035/
http://imdb.com/name/nm0589228/
http://imdb.com/name/nm0533241/
http://imdb.com/name/nm0000217/
http://imdb.com/name/nm0000217/
http://imdb.com/name/nm0000217/
http://imdb.com/name/nm0001486/
http://imdb.com/name/nm0742341/
http://imdb.com/name/nm0742341/
http://imdb.com/name/nm0436284/
http://imdb.com/name/nm0000361/
http://imdb.com/name/nm0000626/
http://imdb.com/name/nm0122653/
http://imdb.com/name/nm0000338/
http://imdb.com/name/nm0150707/
http://www.imdb.com/name/nm0000431/
http://imdb.com/name/nm0000416/
http://imdb.com/name/nm0001243/
http://www.imdb.com/name/nm0000338/
http://imdb.com/name/nm0766129/
http://imdb.com/name/nm0197636/
http://imdb.com/name/nm0001628/
http://imdb.com/name/nm0000797/
http://imdb.com/name/nm0000797/
http://imdb.com/name/nm0284159/,http://www.imdb.com/name/nm034322/,http://www.imdb.com/title/tt0106053/fullcredits#director
http://imdb.com/name/nm0000697/
http://imdb.com/name/nm0202088/
http://imdb.com/name/nm0001243/
http://imdb.com/name/nm0002137/
http://imdb.com/name/nm0770234/
http://imdb.com/name/nm0001486/
http://imdb.com/name/nm0005196/
http://imdb.com/name/nm0864812/
http://imdb.com/name/nm0291035/
http://imdb.com/name/nm0000316/
http://imdb.com/name/nm0000316/
http://imdb.com/name/nm0834893/
http://imdb.com/name/nm0000108/
http://imdb.com/name/nm0027572/
http://imdb.com/name/nm0000697/
http://imdb.com/name/nm0001880/
http://imdb.com/name/nm0153740/,http://imdb.com/title/tt0141842/fullcredits#writers
http://imdb.com/name/nm0000876/
http://imdb.com/name/nm0765121/
http://imdb.com/name/nm0001353/
http://imdb.com/name/nm0001353/
http://imdb.com/name/nm0001486/
http://imdb.com/name/nm0000033/
http://imdb.com/name/nm0001628/
http://imdb.com/name/nm0610496/
http://imdb.com/name/nm0001628/
http://imdb.com/name/nm0936404/
http://imdb.com/name/nm0612322/
http://imdb.com/name/nm0449984/
http://imdb.com/name/nm0449984/
http://imdb.com/name/nm0945026/
http://imdb.com/name/nm0001081/
http://imdb.com/name/nm0000231/
http://imdb.com/name/nm0000231/
http://imdb.com/name/nm0936404/,http://imdb.com/name/nm0730385/
http://imdb.com/name/nm0936404/,http://imdb.com/name/nm0730385/
http://www.imdb.com/name/nm0001661/
http://www.imdb.com/name/nm0001661/
http://imdb.com/name/nm0905579/
http://imdb.com/name/nm0905579/
http://imdb.com/name/nm0905579/
http://imdb.com/name/nm0001566/
http://imdb.com/name/nm0000338/
http://imdb.com/name/nm0000338/
http://imdb.com/name/nm0001188/
http://imdb.com/name/nm0001188/`

let locationDisplayText= 


`E. 5th St.<br>East Village<br>Manhattan
New York County Courthouse<br>40 Foley Square<br>Lower Manhattan
W. 47th St. and Seventh Ave.<br>Times Square<br>Manhattan
E. 60-66th St. and Madison Ave.<br>Upper East Side<br>Manhattan
World Trade Center<br>Lower Manhattan
Carl Schurz Park<br>Upper East Side<br>Manhattan
Long Island City
Statue of Liberty<br>Liberty Island<br>New York Harbor
New York Harbor
Mercer and Grand<br>SoHo<br>Manhattan
E. 95th St. off Madison Ave.<br>Upper East Side<br>Manhattan
Chinatown<br>Manhattan
Mercer St. between Spring and Broome<br>SoHo<br>Manhattan
Coney Island<br>Brooklyn
Pier 11<br>Manhattan
Foot of 59th St. Bridge<br>Upper East Side<br>Manhattan
E. 68th St. between Park Ave. and Madison Ave.<br>Upper East Side<brManhattan
W. 95th St.<br>Upper West Side<br>Manhattan
Bergdorf's at 754 Fifth Ave.<br>Midtown<br>Manhattan
Sixth Ave. between 11th St. and 12th St.<br>West Village<br>Manhattan
Washington Square Park<br>West Village<br>Manhattan
Greenwich St. and Christopher St.<br>Greenwich Village<br>Manhattan
Lower East Side<br>Manhattan
Chelsea
F.A.O. Schwarz at 767 Fifth Ave.<br>Midtown<br>Manhattan
Prospect Park West and 16th St.<br>Windsor Terrace<br>Brooklyn
Tiffany & Co. at 727 Fifth Ave.<br>Midtown<br>Manhattan
E. 71st St.<br>Upper East Side<br>Manhattan
Central Park Mall<br>Manhattan
Carnegie Deli at 854 Seventh Ave.<br>Midtown<br>Manhattan
Howard Beach<br>Queens
American Ballet Theater<br>890 Broadway<br>Manhattan
269 E. Houston St.<br>Lower East Side<br>Manhattan
Chelsea Hotel on W. 23rd St.<br>Chelsea<br>Manhattan
Gowanus Houses<br>Brooklyn
Fort Tryon Park<br>Manhattan
Harlem
Fifth Ave. and 53rd St.<br>Midtown<br>Manhattan
Chambers St. near Centre St.<br>Lower Manhattan
Stuyvesant Ave. and Macon St.<br>Brooklyn
35 Essex St.<br>Lower East Side<br>Manhattan
West Village<br>Manhattan
Central Park<br>Manhattan
Seventh Ave. and 48th St.<br>Times Square<br>Manhattan
Subway Station near Court St.<br>Brooklyn
St. Marks Place<br>East Village<br>Manhattan
George Washington Bus Terminal<br>Manhattan
Central Park South<br>Manhattan
Stuyvesant Ave.<br>Bedford-Stuyvesant<br>Brooklyn
Prospect Park South and 16th St.<br>Brooklyn
The Empire State Building<br>Midtown<br>Manhattan
Guggenheim Museum<br>Upper East Side<br>Manhattan
Orchard St. and Rivington St.<br>Lower East Side<br>Manhattan
High School of the Performing Arts<br>120 W. 46th St.<br>Manhattan
W. 59th St. and Tenth Ave.<br>Upper West Side<br>Manhattan
St. George Station<br>Staten Island
George Washington Bridge<br>Manhattan
A South Bronx rooftop<br>The Bronx
Columbus Circle<br>Upper West Side<br>Manhattan
W. 66th St. and Central Park West<br>Upper West Side<br>Manhattan
World Trade Center<br>Lower Manhattan
Times Square<br>Manhattan
Lincoln Center<br>Upper West Side<br>Manhattan
Lincoln Center Plaza<br>Upper West Side<br>Manhattan
Bethesda Fountain<br>Central Park<br>Manhattan
Ramble<br>Central Park<br>Manhattan
Under Triboro Bridge<br>Randalls Island
Soldiers and Sailor's Monument<br>Riverside Park (at 89th St.)<br>Mahattan
Madison Square Garden<br>Midtown<br>Manhattan
24-13 32nd St.<br>Astoria<br>Queens
W. 76th St & Columbus<br>Upper West Side<br>Manhattan
39 Whitehall St.<br>Lower Manhattan
Sheep's Meadow<br>Central Park<br>Manhattan
Spring St. and Green St.<br>SoHo<br>Manhattan
W. 95th St. and West End Ave.<br>Upper West Side<br>Manhattan
Metro Theatre (2626 Broadway)<br>Upper West Side<br>Manhattan
Municipal Building<br>1 Centre St.<br>Lower Manhattan
Spring St. and Greene St.<br>SoHo<br>Manhattan
Brooklyn Bridge
170th St. in Morrisania<br>The Bronx
W. 20th St. <br>Chelsea<br>Manhattan
William St. and Wall St.<br>Lower Manhattan
W. Broadway and N. Moore St.<br>TriBeCa<br>Manhattan
Central Park<br>Manhattan
Burned-out blocks in the Bronx
Bensonhurst<br>Brooklyn
Strivers' Row<br>Harlem<br>Manhattan
Washington Square Park<br>West Village<br>Manhattan
Rooftops<br>Lower Manhattan
World Trade Center<br>Lower Manhattan
E. 6th St.<br>East Village<br>Manhattan
World Trade Center<br>Lower Manhattan
Hell's Kitchen<br>Ninth Ave.<br>Manhattan
123rd St.<br>Harlem<br>Manhattan
60 Baxter St.<br>Lower Manhattan
Lincoln Center<br>Upper West Side<br>Manhattan
P.S. 6 (45 E. 81st St.)<br>Upper East Side<br>Manhattan
Worth St.<br>Lower Manhattan
Coney Island<br>Brooklyn
Christopher St. Station<br>Sheridan Square<br>Manhattan
Manhattan Bridge<br>Brooklyn
Washington Heights<br>Harlem<br>Manhattan
Adjacent to Apollo Theater,<br>W. 125th St. between 7th and 8th Aves <br>Harlem, Manhattan
Midtown<br>Manhattan
MoMA<br>W. 53rd St.<br>Manhattan
The Bronx
Manhattan
Hester St. and Baxter St.<br>Little Italy<br>Manhattan
Battery Park<br>Lower Manhattan
MacDougal St.<br>SoHo<br>Manhattan
Grand Central Station<br>87 E. 42nd St.<br>Manhattan
Guggenheim Museum<br>E. 88th St. and Fifth Ave.<br>Manhattan
1414 Broadway<br>Midtown<br>Manhattan
Times Square<br>Manhattan
Fifth Ave. and 66th St.<br>Central Park<br>Manhattan
Brooklyn Bridge
Subway
Grant's Tomb<br>Harlem<br>Manhattan
MacDougal St.<br>West Village<br>Manhattan
Roosevelt Island Tramway<br>Manhattan
New York City Bus<br>Manhattan
Carmines<br>200 W. 44th St. <br>Manhattan
Grand Central Terminal<br>Midtown<br>Manhattan
Little Italy<br>Manhattan
Hoboken, New Jersey<br>View of Manhattan
Carnegie Deli<br>Seventh Ave. and W. 55th St.<br>Manhattan
Near Bethesda Fountain<br>Central Park<br>Manhattan
World Trade Center<br>Lower Manhattan
Lower East Side<br>Manhattan
Rockefeller Center<br>600 Fifth Ave.<br>Manhattan
Dean and Deluca<br>SoHo<br>Manhattan
E. 11th St. between Ave. A and Ave. B<br>East Village<br>Manhattan
Winter Garden Theater<br>1634 Broadway<br>Manhattan
Coney Island Boardwalk<br>Brooklyn
Fifth Ave. and E. 62nd St.<br>Upper East Side<br>Manhattan
The Dakota<br>72nd St. and Central Park West<br>Manhattan
The Dakota<br>72nd St. and Central Park West<br>Manhattan
4th Ave. and 86th St.<br>Bay Ridge<br>Brooklyn
Subway Car<br>Brooklyn
Washington Square Park<br>West Village<br>Manhattan
Williamsburg Tenaments<br>Brooklyn
Kaufman Astoria Studios<br>Astoria<br>Queens
Magnolia Bakery<br>401 Bleecker St.<br>Manhattan
MoMA<br>W. 53rd St.<br>Manhattan
Seventh Ave. and W. 42nd St.<br>Times Square<br>Manhattan
New York County Courthouse<br>60 Centre St.<br>Lower Manhattan
McHales Pub<br>W. 46th and Eighth Ave.<br>Manhattan
Ansonia Hotel<br>2109 Broadway<br>Manhattan
Central Park<br>Manhattan
Metropolitan Museum of Art<br>Fifth Ave. at 82nd St.
W. 47th St., near Pier 87<br>Manhattan
W. 47th St., near Pier 87<br>Manhattan
Lower East Side<br>Manhattan
Prospect Park and 16th St.<br>Windsor Terrace<br>Brooklyn
101 Rugby Rd.<br>Brooklyn
Midtown<br>Manhattan
Midtown<br>Manhattan
Sunnyside<br>Queens
Pier 17<br>Manhattan
Hell's Kitchen<br>Manhattan
Edgecomb Ave.<br>Harlem<br>Manhattan
CBGB's <br>315 Bowery (at Bleecker)<br>East Village, Manhattan
Tiffany & Co.<br>727 Fifth Ave.<br>Manhattan
Remsen St. and Montague Terrace<br>Brooklyn Heights<br>Brooklyn
Manhattan
E. 12th St. and Third Ave.<br>East Village<br>Manhattan
Bellmore Cafeteria<br>Park Ave. South and E. 28th St.<br>Manhattan
Columbus Ave. and E. 86th St.<br>Upper West Side<br>Manhattan
E. 91st St. and Fifth Ave.<br>Upper East Side<br>Manhattan
Marine Midlane Bank<br>140 Broadway<br>Lower Manhattan
Central Park<br>Manhattan
Forest Hills
E. 74th St. and Park Ave.<br>Upper East Side<br>Manhattan
Ellis Island<br>New York Harbor
W. 46th St. and Eighth Ave.<br>Midtown<br>Manhattan
E. 6th St. between First Ave. & Ave. A<br>East Village<br>Manhattan
Manhattan Bridge
Chinatown<br>Manhattan
Grand Central Station<br>87 E. 42nd St.<br>Manhattan
Bay 50th St. Station<br>Brooklyn
E. 6th St. and Ave. A<br>East Village<br>Manhattan
358 Chauncy St.<br>Bensonhurst<br>Brooklyn
W. 14th St. and Hudson St.<br>West Village<br>Manhattan
United Nations<br>First Ave. and E. 45th St.<br>Manhattan
51 Prospect Pl.<br>Brooklyn
51 Prospect Pl.<br>Brooklyn
Ed Sullivan Theatre<br>1697 Broadway<br>Manhattan
Third Ave. from E. 55th to 110th St.<br>Upper East Side to E. Harlem<br>Manhattan
Williamsburg Bridge<br>Brooklyn
E. 26th St. near Second Ave.<br>Manhattan
Central Park<br>Manhattan
W. 72nd St. and Broadway<br>Upper West Side<br>Manhattan
Park Ave. and E. 116th St.<br>Harlem<br>Manhattan
Brighton Beach Boardwalk<br>Brooklyn
Columbus Ave. near W. 75th St.<br>Upper West Side<br>Manhattan
Second Ave. and E. 87th St.<br>Upper East Side<br>Manhattan
East 80's<br>Upper East Side<br>Manhattan
Lincoln Center Plaza<br>Upper West Side<br>Manhattan
Lincoln Center Plaza<br>Upper West Side<br>Manhattan
Manhattan
Convent Ave. and 144th St.<br>Hamilton Heights<br>Manhattan
Lexington Ave. between 51st St. and 52nd St.<br>Midtown<br>Manhattan
Greenpoint<br>Brooklyn
Empire Stores Park<br>Brooklyn Bridge
Museum of Natural History<br>W. 79th St. and Central Park West<br>Mahattan
Subway near Court St.<br>Brooklyn
Astroland<br>Coney Island <br>Brooklyn
Subway Car<br>Coney Island<br>Brooklyn
World Trade Center<br>Lower Manhattan
Subway at 53rd St. and Fifth Ave.<br>Midtown<br>Manhattan
Riverside Drive<br>Upper West Side<br>Manhattan
W. 42nd St. between Seventh Ave. and Eighth Ave.<br>Times Square<br>Manhattan
W. 42nd between Ninth Ave. and Tenth Ave.<br>Midtown<br>Manhattan
Brooklyn Bridge
East Harlem (El Barrio)<br>Manhattan
Carousel<br>Central Park<br>Manhattan
Riverside Park near W. 109th St.<br>Morningside Heights<br>Manhattan
Astroland<br>Coney Island <br>Brooklyn
W. 45th St. and Seventh Ave.<br>Times Square<br>Manhattan
New York Stock Exchange<br>Exchange Place<br>Lower Manhattan
Broadway and Vesey St.
W. 68th St.<br>Upper West Side<br>Manhattan
W. 68th St.<br>Upper West Side<br>Manhattan
Katz's Deli<br>205 E. Houston St.<br>Manhattan
Washington Square Park<br>West Village<br>Manhattan
World Trade Center<br>Lower Manhattan
Manhattan Bridge
Charlotte St.<br>The Bronx
Staten Island Ferry<br>New York Harbor
Steeplechase Park<br>Coney Island<br>Brooklyn
New York Public Library<br>Fifth Ave. and 41st St.<br>Manhattan
Verdi Square<br>W. 73rd St.  & Broadway<br>Manhattan
91st Street Community Garden<br>Riverside Park<br>Manhattan`

    
let latitude =

[
40.7224452961828,
40.7137000000000,
40.7592204876521,
40.7661000000000,
40.7117926273691,
40.7750655922650,
40.74607025,
40.6895873134383,
40.6989909067436,
40.7213000000000,
40.7866000000000,
40.7162165380157,
40.7225591322924,
40.5736092162742,
40.7042046109406,
40.7578064331838,
40.7689067645632,
40.7916379656320,
40.7633340000000,
40.7354050994831,
40.7307222999436,
40.7331125200550,
40.7181844332103,
40.74324155,
40.7640530000000,
40.6574944777108,
40.7625100000000,
40.7713606139352,
40.7732131289256,
40.7640730000000,
40.6655354110279,
40.7386410000000,
40.7215160000000,
40.7442870000000,
40.6841527980685,
40.8594603138554,
40.80650084,
40.7604000000000,
40.7134520000000,
40.6831114032117,
40.7160500000000,
40.7289824258668,
40.7792090732745,
40.7598000000000,
40.6938000000000,
40.7291710000000,
40.8492840000000,
40.7670541295091,
40.6893107170727,
40.6572503046534,
40.7483461227418,
40.7829720000000,
40.7203000000000,
40.7575660000000,
40.7704000000000,
40.6445683555248,
40.8493652358538,
40.8174468845588,
40.7681267139935,
40.7724000000000,
40.7122643083124,
40.7593180075412,
40.7723031280163,
40.7733512529741,
40.7743668621601,
40.7764630304290,
40.7845708415303,
40.7923040236013,
40.7503455788795,
40.7714824915087,
40.7800000000000,
40.7029510000000,
40.7717993721535,
40.7238000000000,
40.7946000000000,
40.7967660000000,
40.7130206173333,
40.7238000000000,
40.7031065948382,
40.8387004363497,
40.7405346630455,
40.7064000000000,
40.7197000000000,
40.7747487271979,
40.8343820842596,
40.6019000000000,
40.8180396083858,
40.7310718953207,
40.7082142493220,
40.7125489417478,
40.7255000000000,
40.7112640154449,
40.7616096837484,
40.8009134398031,
40.7158470000000,
40.7724087537612,
40.7775540000000,
40.7171000000000,
40.5746360217693,
40.7336084393223,
40.7050748775105,
40.8322877445507,
40.8100380000000,
40.7552,
40.7611383525427,
40.8397420000000,
40.75728631,
40.7185000000000,
40.7043591450871,
40.7316491301789,
40.7524120000000,
40.7825724148694,
40.7537670000000,
40.7581965201794,
40.7687000000000,
40.7064575206375,
40.7186072791303,
40.8127049,
40.7293645516419,
40.7583590557521,
40.7226892304649,
40.7573675825775,
40.7531089558720,
40.7181356431236,
40.7471269126642,
40.7642000000000,
40.7742612395281,
40.7129230295553,
40.7205700000000,
40.7576030000000,
40.7253670000000,
40.7279579927492,
40.7615280000000,
40.5722319682892,
40.7661000000000,
40.7763900000000,
40.7765605250179,
40.6228000000000,
40.6260702046750,
40.7310718953207,
40.7075798804205,
40.7575990000000,
40.7358034474271,
40.7608458,
40.7560000000000,
40.7144510000000,
40.7597405920739,
40.7799560000000,
40.7715068669966,
40.7790790856402,
40.7646163731163,
40.7647463890479,
40.7185400000000,
40.6572584437698,
40.6473340000000,
40.7525888,
40.75668492,
40.7482323307470,
40.7046844789603,
40.7603744638357,
40.8294302441349,
40.7250340000000,
40.7627961233669,
40.6950000000000,
40.7577983063470,
40.7320000000000,
40.7433500000000,
40.7865000000000,
40.7847000000000,
40.7089720000000,
40.7732618786226,
40.7294030000000,
40.7724500000000,
40.6973640824354,
40.7598000000000,
40.7259741250466,
40.7094016415368,
40.7150048711311,
40.7527025841052,
40.5886022710420,
40.72539684,
40.6815010000000,
40.7405915656527,
40.7506706880159,
40.6796209846076,
40.6797280000000,
40.7637190000000,
40.7590000000000,
40.7113209430845,
40.7397010000000,
40.7897047351501,
40.7788000000000,
40.7993500000000,
40.5748886461028,
40.7794000000000,
40.7786000000000,
40.7770804937423,
40.7723437533226,
40.7721487516255,
40.75421427,
40.8240000000000,
40.7574488514269,
40.7302507497813,
40.7040890000000,
40.7809963774517,
40.6930772101225,
40.5746441709563,
40.5757606001838,
40.7109224485850,
40.7605044880654,
40.8143126677903,
40.7566849203205,
40.7591879809907,
40.7056930038681,
40.7979246369325,
40.7705643416205,
40.8051690029546,
40.5740248299205,
40.7578714478420,
40.7060508638740,
40.7114000000000,
40.7762192933307,
40.7765117777413,
40.7223220000000,
40.7311369361184,
40.7101335850935,
40.7082305151118,
40.8347879563951,
40.6823303463911,
40.5747256627710,
40.7528651331099,
40.7792578185718,
40.7928238690811
]

let longitude = 

[
-73.9786505699157,
-74.0079000000000,
-73.9846211671829,
-73.9696000000000,
-74.0123283863067,
-73.9431273937225,
-73.95038009,
-74.0437960624694,
-74.0384960174560,
-74.0015000000000,
-73.9547000000000,
-73.9980804920196,
-74.0002906322479,
-73.9759683609008,
-74.0060251951217,
-73.9596283435821,
-73.9666020870208,
-73.9665377140045,
-73.9738910000000,
-73.9983165264129,
-73.9965140819549,
-74.0074145793914,
-73.9888536930084,
-74.00196433,
-73.9729780000000,
-73.9740693569183,
-73.9741420000000,
-73.9664304256439,
-73.9712798595428,
-73.9812880000000,
-73.8412570953369,
-73.9897740000000,
-73.9846160000000,
-73.9964970000000,
-73.9880490303039,
-73.9340829849243,
-73.93928647,
-73.9758000000000,
-74.0043730000000,
-73.9320552349090,
-73.9897490000000,
-74.0008378028869,
-73.9711833000183,
-73.9842000000000,
-73.9904000000000,
-73.9893900000000,
-73.9369660000000,
-73.9789938926696,
-73.9332890510559,
-73.9742195606231,
-73.9848840236663,
-73.9593760000000,
-73.9891000000000,
-73.9830470000000,
-73.9876000000000,
-74.0727210044860,
-73.9424729347229,
-73.9088487625122,
-73.9819550514221,
-73.9787000000000,
-74.0112394094467,
-73.9848464727401,
-73.9833766222000,
-73.9836877584457,
-73.9707863330841,
-73.9709794521331,
-73.9294481277465,
-73.9787739515304,
-73.9914983510971,
-73.9152163267135,
-73.9769000000000,
-74.0127770000000,
-73.9748847484588,
-74.0004000000000,
-73.9737000000000,
-73.9699470000000,
-74.0033751726150,
-74.0004000000000,
-73.9931881427764,
-73.9137303829193,
-73.9930325746536,
-74.0095000000000,
-74.0059000000000,
-73.9725083112716,
-73.9199316501617,
-73.9938000000000,
-73.9442163705825,
-73.9968627691268,
-74.0136587619781,
-74.0147799253463,
-73.9840000000000,
-74.0112930536270,
-73.9903128147125,
-73.9333695173263,
-74.0005470000000,
-73.9837628602981,
-73.9606940000000,
-74.0063000000000,
-73.9808070659637,
-74.0027958154678,
-73.9896100759506,
-73.9463353157043,
-73.9504500000000,
-73.9733,
-73.9772021770477,
-73.8809230000000,
-74.00074124,
-73.9988000000000,
-74.0147262811660,
-73.9991319179534,
-73.9779790000000,
-73.9593493938446,
-73.9868660000000,
-73.9851200580596,
-73.9698000000000,
-73.9972758293151,
-73.9883601665496,
-73.96310449,
-74.0010362863540,
-73.9569461345672,
-73.9889395236969,
-73.9867079257965,
-73.9769876003265,
-73.9979088306427,
-74.0249776840210,
-73.9810000000000,
-73.9705234766006,
-74.0131491422653,
-73.9859530000000,
-73.9781010000000,
-73.9997020000000,
-73.9806514978408,
-73.9838020000000,
-73.9839559793472,
-73.9717000000000,
-73.9760690000000,
-73.9761507511138,
-74.0284000000000,
-73.9970237016677,
-73.9992874860763,
-73.9652019739151,
-73.9236710000000,
-74.0050166845321,
-73.97647262,
-73.9870000000000,
-74.0023290000000,
-73.9875447750091,
-73.9818810000000,
-73.9690428972244,
-73.9626109600067,
-73.9974367618560,
-73.9979088306427,
-73.9891800000000,
-73.9746111631393,
-73.9663730000000,
-73.97975564,
-73.97855401,
-73.9139986038208,
-74.0020716190338,
-73.9912569522857,
-73.9396405220031,
-73.9920670000000,
-73.9738762378692,
-73.9977000000000,
-73.9755660295486,
-73.9882000000000,
-73.9840500000000,
-73.9722000000000,
-73.9581000000000,
-74.0105180000000,
-73.9711081981659,
-73.8454550000000,
-73.9629000000000,
-74.0411996841430,
-73.9879000000000,
-73.9851897954940,
-73.9918309450149,
-73.9988690614700,
-73.9772665500640,
-73.9837574958801,
-73.98378432,
-73.9187530000000,
-74.0054619312286,
-73.9679539203643,
-73.9760380983352,
-73.9759740000000,
-73.9828330000000,
-73.9685000000000,
-73.9645743370056,
-73.9789350000000,
-73.9606583118438,
-73.9821000000000,
-73.9432500000000,
-73.9637643098831,
-73.9774000000000,
-73.9513000000000,
-73.9539206027984,
-73.9834195375442,
-73.9831942319870,
-73.96904826,
-73.9467000000000,
-73.9716392755508,
-73.9543604850769,
-73.9936170000000,
-73.9724546670913,
-73.9907366037368,
-73.9788597822189,
-73.9812737703323,
-74.0140503644943,
-73.9754641056060,
-73.9618599414825,
-73.9884245395660,
-73.9947760105133,
-73.9963048696518,
-73.9422154426574,
-73.9775240421295,
-73.9692091941833,
-73.9788812398910,
-73.9853990077972,
-74.0105634927749,
-74.0086000000000,
-73.9839184284210,
-73.9851200580596,
-73.9874330000000,
-73.9971846342086,
-74.0126770734787,
-73.9911764860153,
-73.8921225070953,
-74.0357494354248,
-73.9803296327591,
-73.9815366268158,
-73.9815366268158,
-73.9774167537689,
]


let borough =

`Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Queens
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Queens
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Brooklyn
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Staten Island
Manhattan
The Bronx
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Queens
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
The Bronx
Manhattan
Manhattan
Manhattan
Manhattan
The Bronx
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
The Bronx
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Brooklyn
Brooklyn
Manhattan
Brooklyn
Queens
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Brooklyn
Manhattan
Manhattan
Queens
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Queens
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Brooklyn
Manhattan
Manhattan
Brooklyn
Brooklyn
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Brooklyn
Manhattan
Brooklyn
Brooklyn
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Brooklyn
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
Manhattan
The Bronx
Staten Island
Brooklyn
Manhattan
Manhattan
Manhattan`

let neighborhood =

`East Village
Lower Manhattan
Times Square
Upper East Side
Lower Manhattan
Upper East Side
Queens
New York Harbor
New York Harbor
SoHo
Upper East Side
Chinatown
SoHo
Brooklyn
Lower Manhattan
Midtown
Upper East Side
Upper West Side
Midtown
West Village
West Village
SoHo
Lower East Side
Chelsea
Midtown
Brooklyn
Midtown
Upper East Side
Central Park
Midtown
Queens
Midtown
Lower East Side
Midtown
Brooklyn
Fort George
Harlem
Midtown
SoHo
Brooklyn
Lower East Side
West Village
Central Park
Times Square
Brooklyn
East Village
Fort George
Central Park
Brooklyn
Brooklyn
Midtown
Upper East Side
Lower East Side
Times Square
Upper West Side
Staten Island
Washington Heights
The Bronx
Upper West Side
Upper West Side
Lower Manhattan
Times Square
Upper West Side
Upper West Side
Central Park
Central Park
Randall's Island
Upper West Side
Midtown
Queens
Upper West Side
Lower Manhattan
Central Park
SoHo
Upper West Side
Upper West Side
Lower Manhattan
SoHo
Brooklyn
The Bronx
Chelsea
Lower Manhattan
TriBeCa
Central Park
The Bronx
Brooklyn
Harlem
West Village
Lower Manhattan
Lower Manhattan
East Village
Lower Manhattan
Midtown
Harlem
Lower Manhattan
Upper West Side
Upper East Side
Lower Manhattan
Brooklyn
West Village
Brooklyn
Harlem
Harlem
Midtown
Midtown
The Bronx
Midtown
Lower Manhattan
Lower Manhattan
SoHo
Midtown
Upper East Side
Midtown
Times Square
Central Park
Brooklyn
Lower East Side
Harlem
West Village
Roosevelt Island
Lower East Side
Times Square
Midtown
Lower East Side
New York Harbor
Midtown
Central Park
Lower Manhattan
Lower East Side
Midtown
SoHo
East Village
Midtown
Brooklyn
Upper East Side
Upper West Side
Upper West Side
Brooklyn
Brooklyn
West Village
Brooklyn
Queens
West Village
Midtown
Times Square
Lower Manhattan
Midtown
Upper West Side
Central Park
Upper East Side
Midtown
Midtown
Lower East Side
Brooklyn
Brooklyn
Midtown
Midtown
Queens
Lower Manhattan
Upper West Side
Harlem
SoHo
Midtown
Brooklyn
Midtown
East Village
Midtown
Upper West Side
Upper East Side
Lower Manhattan
Central Park
Queens
Upper East Side
New York Harbor
Midtown
East Village
Lower Manhattan
Chinatown
Midtown
Brooklyn
East Village
Brooklyn
West Village
Midtown
Brooklyn
Brooklyn
Midtown
Upper East Side
Brooklyn
Midtown
Central Park
Upper West Side
Harlem
Brooklyn
Upper West Side
Upper East Side
Upper East Side
Upper West Side
Upper West Side
Midtown
Harlem
Midtown
Brooklyn
Brooklyn
Upper West Side
Brooklyn
Brooklyn
Brooklyn
Lower Manhattan
Midtown
Harlem
Times Square
Midtown
Lower Manhattan
Harlem
Central Park
Morningside Heights
Brooklyn
Times Square
Lower Manhattan
Lower Manhattan
Upper West Side
Upper West Side
Lower East Side
West Village
Lower Manhattan
Lower Manhattan
The Bronx
Staten Island
Brooklyn
Midtown
Upper West Side
Upper West Side`

let IMDBLink =


`http://imdb.com/title/tt0092494/
http://imdb.com/title/tt0050083/
http://www.imdb.com/title/tt0337563/
http://www.imdb.com/title/tt0179626/
http://www.imdb.com/title/tt0307901/
http://www.imdb.com/title/tt0307901/
http://www.imdb.com/title/tt0120787/
http://www.imdb.com/title/tt0059798/
http://imdb.com/title/tt0112286/
http://www.imdb.com/title/tt0088680/
http://www.imdb.com/title/tt0099012/
http://www.imdb.com/title/tt0144084/
http://www.imdb.com/title/tt0078444/
http://www.imdb.com/title/tt0075686/
http://www.imdb.com/title/tt0075686/
http://www.imdb.com/title/tt0075686/
http://www.imdb.com/title/tt0075686/
http://www.imdb.com/title/tt0075686/
http://www.imdb.com/title/tt0082031/
http://imdb.com/title/tt0119822/
http://www.imdb.com/title/tt0061385/
http://www.imdb.com/title/tt0061385/
http://www.imdb.com/title/tt0115632/
http://www.imdb.com/title/tt0115644/
http://www.imdb.com/title/tt0094737/
http://www.imdb.com/title/tt0112541/
http://www.imdb.com/title/tt0054698/
http://www.imdb.com/title/tt0054698/
http://www.imdb.com/title/tt0054698/
http://www.imdb.com/title/tt0087003/
http://imdb.com/title/tt0083395/
http://www.imdb.com/title/tt0210616/
http://www.imdb.com/title/tt0118842/
http://www.imdb.com/title/tt0226935/
http://www.imdb.com/title/tt0112688/
http://www.imdb.com/title/tt0062824/
http://imdb.com/title/tt0065579/
http://imdb.com/title/tt0090555/
http://www.imdb.com/title/tt0092493/
http://www.imdb.com/title/tt0109504/
http://www.imdb.com/title/tt0094921/
http://www.imdb.com/title/tt0080569/
http://www.imdb.com/title/tt0080569/
http://www.imdb.com/title/tt0266452/
http://www.imdb.com/title/tt0071402/
http://www.imdb.com/title/tt0089017/
http://www.imdb.com/title/tt0089017/
http://www.imdb.com/title/tt0112864/
http://www.imdb.com/title/tt0097216/
http://www.imdb.com/title/tt0072890/
http://www.imdb.com/title/tt0208993/
http://www.imdb.com/title/tt0208993/
http://www.imdb.com/title/tt0338013/
http://www.imdb.com/title/tt0080716/
http://www.imdb.com/title/tt0080716/
http://www.imdb.com/title/tt0363607/
http://imdb.com/title/tt0040366/
http://imdb.com/title/tt0082402/
http://www.imdb.com/title/tt0087332/
http://www.imdb.com/title/tt0087332/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0070121/
http://www.imdb.com/title/tt0120685/
http://imdb.com/title/tt0099685/
http://www.imdb.com/title/tt0099699/
http://www.imdb.com/title/tt0063036/
http://www.imdb.com/title/tt0079261/
http://www.imdb.com/title/tt0091167/
http://www.imdb.com/title/tt0091167/
http://www.imdb.com/title/tt0091167/
http://imdb.com/title/tt0382073/
http://www.imdb.com/title/tt0386588/
http://www.imdb.com/title/tt0102070/
http://www.imdb.com/title/tt0110091/
http://www.imdb.com/title/tt0116594/
http://imdb.com/title/tt0454848/
http://www.imdb.com/title/tt0110167/
http://www.imdb.com/title/tt0070238/
http://imdb.com/title/tt0102174/
http://www.imdb.com/title/tt0102175/
null
http://www.imdb.com/title/tt0113540/
http://imdb.com/title/tt0048254/
http://www.imdb.com/title/tt0074751/
http://www.imdb.com/title/tt0264761/
http://www.imdb.com/title/tt0067309/
http://www.imdb.com/title/tt0067309/
http://www.imdb.com/title/tt0067309/
http://imdb.com/title/tt0069599/
http://imdb.com/title/tt0069599/
http://www.imdb.com/title/tt0079417/
http://imdb.com/title/tt0098844/
http://imdb.com/title/tt0046004/
http://www.imdb.com/title/tt0412922/
http://www.imdb.com/title/tt0061927/
http://www.imdb.com/title/tt0438205/
http://www.imdb.com/title/tt0104797/
http://imdb.com/title/tt0464105/
http://www.imdb.com/title/tt0079522/
http://imdb.com/title/tt0048356/
http://imdb.com/title/tt0065317/
http://www.imdb.com/title/tt0070379/
http://www.imdb.com/title/tt0119654/
http://www.imdb.com/title/tt0119654/
http://www.imdb.com/title/tt0119654/
http://www.imdb.com/title/tt0119654/
http://www.imdb.com/title/tt0064665/
http://www.imdb.com/title/tt0064665/
http://imdb.com/title/tt0059448/
http://www.imdb.com/title/tt0100168/
http://imdb.com/title/tt0082783/
http://www.imdb.com/title/tt0102526/
http://imdb.com/title/tt0074963/
http://www.imdb.com/title/tt0082817/
http://www.imdb.com/title/tt0063356/
http://www.imdb.com/title/tt0063356/
http://imdb.com/title/tt0053125/
http://imdb.com/title/tt0041716/
http://imdb.com/title/tt0047296/
http://www.imdb.com/title/tt0117247/
http://www.imdb.com/title/tt0117247/
http://imdb.com/title/tt0102609/
http://www.imdb.com/title/tt0311648/
http://www.imdb.com/title/tt0067589/
http://www.imdb.com/title/tt0387514/
http://www.imdb.com/title/tt0082970/
http://www.imdb.com/title/tt0073620/
http://www.imdb.com/title/tt0180093/
http://www.imdb.com/title/tt0063522/
http://www.imdb.com/title/tt0063522/
http://www.imdb.com/title/tt0063522/
http://www.imdb.com/title/tt0076666/
http://www.imdb.com/title/tt0076666/
http://www.imdb.com/title/tt0108065/
http://www.imdb.com/title/tt0070666/
http://www.imdb.com/title/tt0063951/
http://www.imdb.com/title/tt0159206/
http://imdb.com/title/tt0053270/
http://www.imdb.com/title/tt0067741/
http://www.imdb.com/title/tt0162650/
http://www.imdb.com/title/tt0117628/
http://www.imdb.com/title/tt0105414/
http://www.imdb.com/title/tt0108149/
http://www.imdb.com/title/tt0108149/
http://www.imdb.com/title/tt0117665/
http://www.imdb.com/title/tt0117665/
http://www.imdb.com/title/tt0084698/
http://www.imdb.com/title/tt0114478/
http://www.imdb.com/title/tt0084707/
http://www.imdb.com/title/tt0145487/
http://www.imdb.com/title/tt0145487/
http://www.imdb.com/title/tt0145487/
http://www.imdb.com/title/tt0088161/
http://imdb.com/title/tt0100685/
http://www.imdb.com/title/tt0107079/
http://www.imdb.com/title/tt0162677/
http://www.imdb.com/title/tt0256415/
http://www.imdb.com/title/tt0063661/
http://imdb.com/title/tt0051036/
http://www.imdb.com/title/tt0075314/
http://www.imdb.com/title/tt0075314/
http://www.imdb.com/title/tt0075314/
http://www.imdb.com/title/tt0066767/
http://www.imdb.com/title/tt0064036/
http://www.imdb.com/title/tt0064036/
http://imdb.com/title/tt0112461/
http://www.imdb.com/title/tt0099165/
http://www.imdb.com/title/tt0087004/
http://www.imdb.com/title/tt0112585/
http://imdb.com/title/tt0087089/
http://www.imdb.com/title/tt0109493/
http://www.imdb.com/title/tt0118971/
http://www.imdb.com/title/tt0101889/
http://www.imdb.com/title/tt0067116/
http://www.imdb.com/title/tt0071562/
http://www.imdb.com/title/tt0042114/
http://imdb.com/title/tt0274558/
http://www.imdb.com/title/tt0373926/
http://www.imdb.com/title/tt0065963/
http://www.imdb.com/title/tt0065963/
http://www.imdb.com/title/tt0106053/
http://imdb.com/title/tt0037884/
http://imdb.com/title/tt0040636/
http://www.imdb.com/title/tt0063348/
http://www.imdb.com/title/tt0066193/
http://www.imdb.com/title/tt0067549/
http://imdb.com/title/tt0059575/
http://www.imdb.com/title/tt0107824/
http://www.imdb.com/title/tt0093737/
http://www.imdb.com/title/tt0072034/
http://www.imdb.com/title/tt0063462/
http://www.imdb.com/title/tt0063462/
http://www.imdb.com/title/tt0395251/
http://imdb.com/title/tt0110413/
http://www.imdb.com/title/tt0265666/
http://imdb.com/title/tt0048605/
http://www.imdb.com/title/tt0133952/
http://www.imdb.com/title/tt0141842/
http://www.imdb.com/title/tt0367089/
http://www.imdb.com/title/tt0072251/
http://www.imdb.com/title/tt0080120/
http://www.imdb.com/title/tt0080120/
http://www.imdb.com/title/tt0078504/
http://imdb.com/title/tt0051207/
http://www.imdb.com/title/tt0073802/
http://www.imdb.com/title/tt0081635/
http://www.imdb.com/title/tt0084805/
http://www.imdb.com/title/tt0056626/
http://www.imdb.com/title/tt0062425/
http://www.imdb.com/title/tt0069449/
http://www.imdb.com/title/tt0069449/
http://www.imdb.com/title/tt0263757/
http://www.imdb.com/title/tt0259711/
http://www.imdb.com/title/tt0094291/
http://www.imdb.com/title/tt0094291/
http://imdb.com/title/tt0055614/
http://imdb.com/title/tt0055614/
http://www.imdb.com/title/tt0098635/
http://www.imdb.com/title/tt0098635/
http://www.imdb.com/title/tt0083336/
http://www.imdb.com/title/tt0083336/
http://www.imdb.com/title/tt0083336/
http://www.imdb.com/title/tt0096463/
http://www.imdb.com/title/tt0061209/
http://www.imdb.com/title/tt0061209/
http://www.imdb.com/title/tt0128853/
http://www.imdb.com/title/tt0128853/`