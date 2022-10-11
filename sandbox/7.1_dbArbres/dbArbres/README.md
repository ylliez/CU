# Mongoose Queries
## Backstory
A dear friend of mine is living a double life: by day, she works with a municipal landscaping company, and by night a brilliant budding permaculturist.  Her backyard being overrun with plants of all sorts, we recently decided to spill over into the street, giving life to a plot of earth left vacant by the city after felling the tree. However, the day before we were set to build a planter, we awoke to a little sign indicating that a tree was to be replanted. It has been a month since then, with no tree in sight, and I finally decided to take matters into my own interfaces and explore municipal sylvicultural data collection, to see whether, unbeknownst to us and contrary to all perceptual reality, a tree had been planted

## Datasets
### [Arbres publics sur le territoire de la Ville](https://donnees.montreal.ca/ville-de-montreal/arbres)
- INV_TYPE (Liste de valeur) : Type d’arbre inventorié : H pour Hors rue et R pour arbre de Rue
- EMP_NO (Numérique) : Numérotation correspondant à l’identification unique de l’emplacement de l’arbre dans la base de données. Celle-ci est propre aux arbres de rue et hors rue (i.e. un arbre R et un arbre H peuvent porter le même numéro d’emplacement).
- ARROND (Numérique) : Numérotation de l’arrondissement
- ARROND_NOM (Numérique) : Nom de l’arrondissement
- Rue (Texte variable) : Nom de la rue sur laquelle l’arbre est positionné, juste dans le cas des arbres des rues
- COTE (Liste de valeur) : Coté de la rue (Nord, Sud, Est, Ouest)
- No_civique (Numérique) : Numéro civique de la résidence ou le bâtiment sur lequel ou en face duquel l’arbre est situé, lorsque disponible
- Emplacement(Liste de valeur) : Lieu physique, extension de terrain où se trouve l’arbre § Banquette gazonnée, § Banquette asphaltée, § Fond de trottoir, § Parc, § Parterre gazonné, § Parterre asphalté, § Parterre, § Terre plein, Trottoir entre autres.
- Coord_X (Numérique) : Coordonnée X NAD 83 MTM8
- Coord_Y (Numérique) : Coordonnée Y NAD 83 MTM8
- SIGLE (Numérique) : Acronyme composé des deux premières lettres du genre, de l’espèce et du cultivar, si appliquable du nom
- Essence_latin (Texte variable) : Nom latin de l’essence
- Essence_Fr (Texte variable) : Nom français de l’essence
- Essence_Ang (Texte variable) : Nom anglais de l’essence
- DHP (Numérique) : Mesure du Diamètre du tronc d’un arbre à la Hauteur de la Poitrine qui équivaut à 1,4 m. à partir du plus haut niveau du sol
- Date_releve (Date) : La date de la dernière prise du DHP
- Date_plantation (Date) : Date de la plantation de l’arbre, lorsque disponible
- LOCALISATION (Texte variable) : Position de l’arbre en fonction d’un immeuble ou chaînage et direction à partir du coin du dernier immeuble.
- CODE_PARC (Texte variable) : No. d’index du parc. Numérotation unique qui représente un parc dans la Ville
- NOM_PARC (Texte variable) : Nom du parc
- Latitude (Numérique) : Latitude WGS84
- Longitude (Numérique) : Longitude WGS84

### [Quartiers sociologiques](https://donnees.montreal.ca/ville-de-montreal/quartiers-sociologiques)
- id (numérique) : Identifiant unique
- Q_sociologique (texte) : Le nom du quartier sociologique
- Arrondissement (texte) : Nom de l’arrondissement où se situe la RUI (Zone de revitalisation urbaine intégrée)
- Abreviation (texte) : Abréviation du nom de l’arrondissement
- nbr_RUI : Nombre de RUI présent sur le territoire du quartier sociologique
- Table : Le nom de la table de quartier liée au quartier sociologique

### [Abattage - Arbres publics sur le territoire de la Ville](https://donnees.montreal.ca/ville-de-montreal/abattage-arbres-publics)
- ARH_TYPE (Liste de valeur) : Type d’arbre inventorié : H pour Hors rue et R pour arbre de Rue
- ARH_EMP_NO (Numérique) : Numérotation correspondant à l’identification unique de l’emplacement de l’arbre dans la base de données. Celle-ci est propre aux arbres de rue et hors rue (i.e. un arbre R et un arbre H peuvent porter le même numéro d’emplacement).
- ARH_NO (Numérique) : Numéro séquentiel de l’arbre abattu sur un même emplacement depuis 1989-1991
- ARH_ESSENCE (Texte variable) : Acronyme composé des deux premières lettres du genre, de l’espèce et du cultivar, si appliquable, à partir du nom Latin (référence à l’ensemble des arbres publics)
- ARH_DATE_ABATTAGE (Date et/ou heure) : Date de l’abattage depuis la période comprise entre 1989-1991.
- Coord_X (Numérique):Coordonnées X (NAD83 MTM8)
- Coord_Y (Numérique):Coordonnées Y (NAD83 MTM8)
- Longitude (Numérique):Coordonnées (WGS84)
- Latitude (Numérique):Coordonnées (WGS84)

## Queries
### mtlArbres
- Number of documents (i.e. trees in Montreal)
- Number of trees in Plateau neighbourhood
- Number of trees in a geographic perimeter
- Trees in a geographic perimeter
- Number of trees in a geographic perimeter on a certain street
- Trees in a geographic perimeter on a certain street
- Trees in a geographic perimeter on a certain street, returning specific fields
- Other
- Distinct values of essences + save to file
- Distinct values of essence abbreviations + save to file
- Distinct values of neighbourhoods + save to file
- Spatial approximation to coordinates --> FAILED
### mtlQuartiers
- Number of documents (i.e. quartiers)
- Number of distinct quartier fields
- Number of distinct arrondissement fields
- Distinct arrondissement fields
- Distinct arrondissement/abbreviation pair --> FAILED
### mtlAbattages
- Number of documents (i.e. fellings in Montreal)
- Number of fellings in a geographic perimeter
- Number of fellings in a geographic perimeter, returning specific fields
- Number of fellings in a geographic perimeter, sorted by date --> FAILED
### Municipal lies
- Trees in a geographic perimeter on a certain street, returning specific fields
- Tree with specific geographic coordinates
- Fellings with specific lot number

## Conclusion
- Municipal sylvicultural datasets not unimpressive
- High rate of tree felling & planting
- Mongoose powerful but painful