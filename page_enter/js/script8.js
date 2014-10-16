window.SmartDisplay = {

	Services: {
		'.facebook.': facebook,
		'.youtube.': youtube,
		'.leboncoin.fr': leboncoin,
		'lequipe.fr': lequipe,
		'.orange.fr': orange,
		'search.babylon.': babylon,
		'search.conduit.': conduit,
		'.google.': google,
		'search.iminent.': iminent,
		'search.yahoo.': yahoo,
		'.incredibar.': incredibar,
		'search.mywebsearch.': mywebsearch,
		'ask.com': asksearch,
		'amazon.fr': amazon,
		'twitter.com': twitter,
		'.wikipedia.org': wikipedia,
	},

	// define logics URL
	_logicsURL:			document.location.protocol + "//www.boxore.com/javascripts/smartdisplay/logics",
	// Days till the cookie expires
	_daysToExpire: 2,

	// initialize logics list
	Logics:				{},

	//
	Initialize: function ()
	{
		// check all supported services
		for (var service in this.Services)
		{
			// check if we can run service
			if (document.location.hostname.indexOf(service) != -1)
			{
				this.installService(this.Services[service]);
			}
		}
	},

	// installs JavaScript
	installJS: function (jsSourceName, callBackFunction)
	{
		if (typeof installJS !== "undefined") {
			// Use Background page's request if defined
			installJS(jsSourceName, callBackFunction);
			return;
		}
		var nodeParent	= document.getElementsByTagName('head');
		var node		= document.createElement("script");
		node.type		= "text/javascript";
		node.src		= jsSourceName;
		node.defer		= "defer";

		// setup callback function if needed
		if (callBackFunction) {
			node.onload = callBackFunction;
			node.onreadystatechange = function() {
				// http://stackoverflow.com/questions/6946631/dynamically-creating-script-readystate-never-complete
				if(this.readyState === 'complete' || this.readyState === 'loaded') {
					callBackFunction();
		        }
		    };
		}

	    // do installation
		if (nodeParent && nodeParent[0])
		{
			nodeParent[0].appendChild(node);
		}
	},

	// installs installService
	installService: function (serviceName)
	{
		this.installJS(this._logicsURL + "/" + serviceName + ".js", function () {
			window.SmartDisplay.Logics[serviceName.split("-")[0]].Initialize();
		});
		// Create IE + others compatible event handler
		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		// Listen to message from child window
		eventer(messageEvent,function (e) {
			if (e.origin && (e.origin.indexOf('boxore.com') !== -1)) {
				SmartDisplay.closeBanner(e.data);
			}
		},false);
	}
};

window.SmartDisplay.Initialize();

/*

 
Dordogne (d�partement)
Page d'aide sur l'homonymie Pour les articles homonymes, voir Dordogne.
Dordogne
Dordogne (d�partement)
Dordogne (d�partement)
Administration
Pays 	Drapeau de la France France
R�gion 	Aquitaine
Cr�ation du d�partement 	4 mars 1790
Chef-lieu
(Pr�fecture) 	P�rigueux
Sous-pr�fecture(s) 	Bergerac
Nontron
Sarlat-la-Can�da
Pr�sident du
conseil g�n�ral 	Bernard Cazeau (PS)
Pr�fet 	Jacques Billant
Code Insee 	24
Code ISO 3166-2 	FR-24
Code Eurostat NUTS-3 	FR611
D�mographie
Population 	415 168 hab. (2011)
Densit� 	46 hab./km2
G�ographie
Superficie 	9 060 km2
Subdivisions
Arrondissements 	4
Circonscriptions l�gislatives 	4
Cantons 	50
Intercommunalit�s 	26
Communes 	557
modifier Consultez la documentation du mod�le

Le d�partement de la Dordogne (prononc� [d??.'d??]) est un d�partement fran�ais de la r�gion Aquitaine qui doit son nom au cours d'eau du m�me nom qui le traverse. L'Insee et la Poste lui attribuent le code 24.

Sommaire

    1 Histoire
    2 Embl�mes
        2.1 Blason
        2.2 Drapeau
    3 Politique
    4 G�ographie
    5 Climat
    6 �conomie
    7 D�mographie
    8 Culture
        8.1 Langue
        8.2 Gastronomie
        8.3 Cin�ma
        8.4 Symbole
    9 Religion
    10 Transport
        10.1 R�seau routier de la Dordogne
        10.2 Train
        10.3 A�rodromes
    11 Tourisme
        11.1 Les r�sidences secondaires
    12 Sant�
    13 Personnages c�l�bres de la Dordogne
        13.1 Personnalit�s politiques
            13.1.1 XVIIIe si�cle
            13.1.2 XIXe si�cle
            13.1.3 XXe si�cle
        13.2 Personnalit�s militaires
            13.2.1 XVIIIe si�cle
            13.2.2 XIXe si�cle
        13.3 Personnalit�s religieuses
            13.3.1 XVe si�cle
            13.3.2 XVIIIe si�cle
            13.3.3 XXe si�cle
        13.4 Artistes
            13.4.1 XIXe si�cle
            13.4.2 XXe si�cle
        13.5 Cin�ma, th��tre, acteurs
            13.5.1 XIXe si�cle
            13.5.2 XXe si�cle
        13.6 Banquiers, �conomistes, industriels, hommes d'affaires
            13.6.1 XIXe si�cle
            13.6.2 XXe si�cle
        13.7 �crivains, philosophes, po�tes, chansonniers, journalistes
            13.7.1 XIIe si�cle
            13.7.2 XVIe si�cle
            13.7.3 XVIIe si�cle
            13.7.4 XIXe si�cle
            13.7.5 XXe si�cle
        13.8 Historiens
        13.9 Musique, musiciens
            13.9.1 XXe si�cle
        13.10 Scientifiques, ing�nieurs, �rudits
            13.10.1 XVIIIe si�cle
            13.10.2 XIXe si�cle
            13.10.3 XXe si�cle
        13.11 Sportifs
            13.11.1 XXe si�cle
    14 Divers
    15 Notes et r�f�rences
    16 Voir aussi
        16.1 Bibliographie
        16.2 Articles connexes
        16.3 Liens externes

Histoire
La pr�fecture de la Dordogne � P�rigueux.
Article d�taill� : Histoire de la Dordogne.

Le d�partement a �t� cr�� � la R�volution fran�aise, le 4 mars 1790, en application de la loi du 22 d�cembre 1789, sur une partie de l'ancienne province du P�rigord.

En 1793, les communes de Boisseuilh, Coubjours, G�nis, Payzac, Saint-Cyr-les-Champagnes, Saint-Mesmin, Salagnac, Savignac, Saint-Tri� et Teillots sont d�tach�es du d�partement de la Corr�ze pour �tre r�unies � la Dordogne.

La Dordogne a c�d�, en 1793 ou 1794, Cavarc au Lot-et-Garonne1.

Le 6 Niv�se An III (26 d�cembre 1794), la commune de Parcoul est d�tach�e de la Charente-Inf�rieure et r�unie � la Dordogne2.

En 1819, la commune de Beaurepos est soustraite du d�partement et fusionne avec Souillac dans le Lot3.
Embl�mes
Blason
Blason 	Blasonnement :
� De gueules aux trois lions d'or couronn�s, arm�s et lampass�s d'azur. �[r�f. n�cessaire]
Drapeau

Drapeau fr d�partement Dordogne.svg
Politique

    Conseil g�n�ral de la Dordogne
    Intercommunalit�s de la Dordogne
    Communes de la Dordogne
    Anciennes communes de la Dordogne
    Liste des d�put�s de la Dordogne
    Liste des s�nateurs de la Dordogne
    Liste des conseillers g�n�raux de la Dordogne
    Liste des pr�fets de la Dordogne

G�ographie
Carte de la Dordogne
Article d�taill� : G�ographie de la Dordogne.

La Dordogne, 3e d�partement fran�ais par sa superficie, fait partie de la r�gion Aquitaine. C'est �galement avec 45 % de son territoire bois�, le 3e d�partement forestier de France 4.

Elle est limitrophe des d�partements de la Haute-Vienne, de la Corr�ze, du Lot, de Lot-et-Garonne, de la Gironde, de la Charente-Maritime et de la Charente.

    Longitude : entre 0�3' ouest et 1�25' est.
    Latitude : entre 44�35' et 45�43' nord

Points extr�mes du d�partement de la Dordogne :

    Nord : Busserolles
    Sud : Loubejac
    Est : Nadaillac
    Ouest La Roche-Chalais

Structures les plus hautes de la Dordogne :

    Audrix, �metteur de communications d'Audrix : 205 m
    Bergerac, �metteur de Monbazillac : 60 m

La Dordogne s�par�e entre 4 parties, formant le P�rigord.
Climat
Article d�taill� : Climat de la Dordogne.
�conomie

Le secteur du bois est le second employeur industriel de Dordogne, avec nombre de scieries et de transformateurs4.

La viticulture avec les vignobles de bergerac, de monbazillac et de p�charmant est aussi une grande pourvoyeuse d'emplois et de cr�ation de richesses, et une v�ritable attraction touristique.

Principalement �tablis au sud-est du d�partement, 200 producteurs de tabac fournissent 15 % de la production nationale5.

En 2012, le tourisme repr�sente 21 % du PIB du d�partement et a un potentiel encore fort � d�velopper, notamment vers les visiteurs anglo-saxons, amateurs de gastronomie fran�aise6.

Au niveau industriel, 3 271 entreprises r�parties sur tout le d�partement emploient environ 23 800 personnes7.
D�mographie
Article d�taill� : D�mographie de la Dordogne.

Les habitants de la Dordogne sont appel�s P�rigourdins ou P�rigordins (par analogie entre le d�partement actuel et l'ancienne province du P�rigord qui lui correspondait)[r�f. souhait�e]. Les appellations Dordognais, voire Dordognots, sont �galement usit�es8.

Les ressortissants du Royaume-Uni sont plus de 20 000 (en 2006) � y habiter mais la plupart font attention � ne pas s�journer plus de six mois et un jour pour �viter d'�tre consid�r�s r�sidents en France. Officiellement, le nombre de Britanniques r�sidant en Dordogne s'�l�ve � 6 300 en 2006, ce qui repr�sente un britannique sur deux vivant en Aquitaine9.
Culture
Langue

La langue traditionnelle du P�rigord est l'occitan, de dialecte limousin au nord d'une ligne allant approximativement de Montazeau � Nadaillac, et de dialecte languedocien au sud de cette ligne. Seules les communes de Parcoul et de La Roche-Chalais (en partie) sont dans l'aire des langues d'o�l (saintongeais).
Gastronomie

Le foie gras d'oie et de canard, le caviar p�rigourdin de Montpon, l'escargot du P�rigord, le tourin (ou tourain), le cassoulet du P�rigord, le canard (magrets, aiguillettes, grattons, fritons, saucisses s�ches, rillettes, p�t�s, confits, g�siers, cous farcis, ...), les demoiselles, le poulet fermier du P�rigord, le coq fermier au vin de Bergerac, la poularde en estouffade, les confits de dinde, l'oie, les confits, les g�siers, les saucisses s�ches d'oie, le p�t� de P�rigueux, le p�t� de foie d'oie truff�, les pieds de cochons farcis aux c�pes, les miques, les cagouilles de P�rigueux, les enchauds ou confits de viande de porc, la sauce P�rigueux, le brochet aux lardons, la carpe au confit, les omelettes aux c�pes, aux morilles et � la truffe, les pommes de terre sarladaises, le trappe �chourgnac, le monial, les champignons dont la truffe, le c�pe et la morille, les noix du P�rigord, l'huile de noix, les tartes aux noix, les arlequins de Carlux, les nogailloux du P�rigord, les merveilles de Sarlat, les kiwis, les mirabelles, les maras des bois, les gariguettes et les fraises pr�coces du P�rigord, les framboises, les m�res, les ch�taignes, les pommes, les prunes, les poires, les miels, les vins de Domme pr�s de Sarlat, mais surtout le bergerac, le monbazillac ainsi que le p�charmant, le saussignac et le montravel, la bi�re et le vin de noix, les eaux-de-vie de prune, de poire, le ratafia, les liqueurs de framboise, de m�re, de mirabelle, de noisette sauvage, de ch�taigne et de truffe.
Cin�ma
Article d�taill� : Liste de films tourn�s en Dordogne.

Environ 120 films ont �t� tourn�s dans le d�partement de 1928 � 201310.
Symbole

    Le sculpteur allemand Jochen Gerz a r�habilit� le monument aux morts de Biron, inaugur� le 13 juillet 1996. � Qu'est-ce qui est, selon vous, assez important pour risquer votre vie ? � est la question pos�e aux habitants du village. Les r�ponses sont retranscrites sur des plaques fix�es sur le monument. Les messages parlent d'amour, de peur, de paix11...

Religion

La Dordogne poss�de un important patrimoine religieux, qui peut trouver sa l�gitimit� de par la concordance g�ographique entre le d�partement et les diff�rents chemins de Saint-Jacques de Compostelle12. Ainsi, entre clo�tres, abbayes, chapelles et m�me cath�drales, le P�rigord offre un large �ventail d'�difices religieux refl�tant tous les styles architecturaux, souvent class�s monuments historiques et parfois m�me inscrits au Patrimoine mondial de l'UNESCO13, comme l'Abbaye de Cadouin, ou la Cath�drale Saint-Front, � P�rigueux. � titre d'exemple, on pourrait citer l'abbaye Notre-Dame de Bonne-Esp�rance d'�chourgnac, qui allie patrimoine architectural et gastronomique avec notamment le Trappe �chourgnac, consid�r� comme �tant le plus ancien fromage de Dordogne14.

    Pour l'�glise catholique, la Dordogne correspond au dioc�se de P�rigueux et Sarlat.

Transport
R�seau routier de la Dordogne
Article d�taill� : R�seau routier de la Dordogne.

Au 31 d�cembre 2010, la longueur totale du r�seau routier du d�partement de la Dordogne est de 18 945 kilom�tres, se r�partissant en 103 kilom�tres d'autoroutes, 129 kilom�tres de routes nationales, 4 965 kilom�tres de routes d�partementales et 13 741 kilom�tres de voies communales.
Train

Le r�seau ferroviaire de la Dordogne est compos� de 42 gares.
A�rodromes

    Belv�s, A�rodrome de Belv�s - Saint-Pardoux, usage restreint.
    Bergerac, A�roport Bergerac - Roumani�re baptis� A�roport Bergerac Dordogne P�rigord (nom commercial).
    Condat-sur-V�z�re, A�rodrome Condat-sur-V�z�re.
    Domme, A�rodrome de Sarlat - Domme.
    Fougueyrolles, A�rodrome de Sainte-Foy-la-Grande.
    P�rigueux, A�roport P�rigueux-Bassillac.
    Rib�rac, A�rodrome de Rib�rac - Saint-Aulaye, usage restreint.
    Saint-Cr�pin-et-Carlucet, H�liclub du P�rigord.

Tourisme
Article d�taill� : Tourisme en Dordogne.

d�taillant les :
Les ch�teaux de Castelnaud et de Beynac en vall�e de la Dordogne.

    Lieux les plus visit�s de la Dordogne
    Ch�teaux et demeures de la Dordogne
    Les Plus Beaux Villages de France
    Monuments historiques de la Dordogne
    Parc naturel r�gional P�rigord-Limousin
    For�t de Dordogne
    Sites Natura 2000 de la Dordogne
    Sites naturels remarquables
    Jardins remarquables
    Arbres remarquables
    Voies vertes
    Sentiers de grande randonn�e
    Sites d'escalades
    �difices religieux
    Lanternes des morts
    Ponts m�di�vaux
    Mus�es
    �comus�es
    Parc de loisirs
    Parc zoologique
    Chemin de fer touristique
    Tourisme gastronomique

Les r�sidences secondaires

Selon les estimations de la population au 1er janvier 2008, 14,6 % des logements disponibles dans le d�partement �taient des r�sidences secondaires15.

Ce tableau indique les principales communes de la Dordogne dont les r�sidences secondaires et occasionnelles d�passent 10 % des logements totaux.
[afficher]
Communes ayant plus de 10 % de r�sidences secondaires en 2008
 
Sant�

Le d�partement comprend dix h�pitaux d'une capacit� de 2 368 lits, soit par importance16 :

    P�rigueux centre hospitalier de 659 places.
    Bergerac centre hospitalier Samuel Pozzi, 289 places.
    Sarlat-la-Can�da centre hospitalier Jean Leclaire, 287 places.
    Nontron centre hospitalier, 249 places.
    Saint-Astier h�pital local EHPAD,
    205 places.
    Excideuil h�pital local EHPAD, 200 places.
    Saint-Privat-des-Pr�s centre hospitalier La Meynardie, 185 places.
    Saint-Aulaye h�pital local Chenard, 139 places.
    Antonne-et-Trigonant centre hospitalier Lanmary, 120 places.
    Belv�s centre hospitalier, 35 places.

En 2011, la Dordogne compte 163 m�decins g�n�ralistes pour 100 000 habitants (183 pour 100 000 au niveau national), 87 sp�cialistes pour 100 000 habitants (137 pour 100 000 en France) et 174 pharmacies pour l'ensemble du d�partement17.
Personnages c�l�bres de la Dordogne

Les personnalit�s cit�es ci-dessous le sont par leur rattachement au d�partement de la Dordogne, entit� administrative cr��e en 1790. Pour les personnalit�s ant�rieures � cette date, voir l'article P�rigord.
Personnalit�s politiques
XVIIIe si�cle

    Antoine Duranthon, (1736 - 1793), N� � Mussidan en 1736, Avocat, il sera ministre de la justice pendant la R�volution, du 14 avril 1792 au 4 juillet 1792. Il assurera l'int�rim du minist�re des finances du 13 au 18 juin 1792. Girondin, il sera ex�cut� par les partisans de Robespierre par guillotine � Bordeaux le 20 d�cembre 1793.
    Jacques de Maleville, Jacques de Maleville, n� en 1741 � Domme, o� il est mort en 1824, est un jurisconsulte et homme politique fran�ais. Avocat � Bordeaux en 1789, il devient en 1790 pr�sident du directoire de la Dordogne puis juge au tribunal de cassation en 1791. Il est membre du Conseil des Anciens de 1795 � 1799. Il fut l'un des quatre r�dacteurs du Code Civil dit Code Napol�on.
    �lie Lacoste (1745-1806) est un r�volutionnaire fran�ais n� � Montignac, le 18 septembre 1745, mort � Montignac, le 26 novembre 1806.
    Fran�ois Lamarque, n� � M�nestrol, pr�s de Montpont le 2 novembre 1753, mort � Montpont, le 13 mai 1839. Avocat sous l'Ancien R�gime au Parlement de Paris. En 1790, Fran�ois Lamarque est juge au tribunal criminel de P�rigueux. En 1791, il est �lu � l'Assembl�e l�gislative. R��lu d�put� en 1792 � la Convention nationale. Il propose la d�ch�ance du roi, le 9 ao�t 1792. Au Proc�s de Louis XVI en janvier 1793, il vote la mort du roi. Apr�s avoir �t� livr� aux Autrichiens par Charles Fran�ois Dumouriez, il fut emprisonn� dans la forteresse du Spielberg, en 1795, il fut �chang� contre la fille de Louis XVI de France.

XIXe si�cle

    Pierre Magne (1806�1879), homme politique fran�ais, s�nateur du Second Empire et ministre des Finances, originaire de P�rigueux
    Marc Antoine Calmon, n� � Tamni�s le 3 mars 1815 et mort � Paris le 12 octobre 1890, est un homme politique fran�ais.
    Marc Dufraisse �tait un homme politique fran�ais du XIXe si�cle, n� � Rib�rac en 1811, et mort � Paris, en 1876.
    Fran�ois Guillaume Marc Montagut, est un homme politique fran�ais, n� le 2 avril 1816 � Excideuil et d�c�d� le 20 mars 1895 � Nice (Alpes-Maritimes).
    Antoine de Tounens (1825-1878), roi d'Araucanie et de Patagonie (sous le nom d'Or�lie-Antoine Ier) de 1860 � 1860, n� � Chourgnac et mort � Tourtoirac.
    Antoine Gadaud, n� � Saint-Maime-de-P�reyrol le 26 avril 1841 et mort � P�rigueux le 29 octobre 1897, docteur en m�decine et homme politique fran�ais. Ministre de l'Agriculture du 26 janvier 1895 au 31 octobre 1895 dans le Gouvernement Alexandre Ribot (3). �lu s�nateur de la Dordogne du 19 avril 1891 au 29 octobre 1897.
    Adrien Dariac (Adrien Louis Dariac), n� � P�rigueux le 14 juin 1868 et mort � Contres (Loir et Cher) le 13 juin 1949, est un homme politique fran�ais.
    Robert David est un homme politique fran�ais n� le 5 novembre 1873 � Fontainebleau (Seine-et-Marne) et d�c�d� le 26 avril 1958 � Magnac-Laval (Haute-Vienne). D�put� Gauche r�publicaine d�mocratique de la Dordogne de 1910 � 1914 et de 1919 � 1924.
    Suzanne Lacore, (1875-1975), ministre du Front Populaire
    Paul Faure, n� le 3 f�vrier 1878 � P�rigueux et mort le 16 novembre 1960 � Paris, est un homme politique fran�ais, dirigeant de la SFIO dans l'entre-deux guerres.
    Jean Galmot est n� le 2 juin 1879 � Monpazier et mort � Cayenne (Guyane) le 6 ao�t 1928. C'est un homme d'affaires, un homme politique et un �crivain fran�ais.
    Adrien Bels est un agriculteur et homme politique fran�ais n� le 25 octobre 1882 et d�c�d� le 15 ao�t 1964.
    Yvon Delbos est un homme politique fran�ais, n� le 7 mai 1885 � Thonac et d�c�d� le 15 novembre 1956 � Paris. Il fut notamment ministre des Affaires �trang�res, de la D�fense nationale et de l��ducation nationale.
    Georges Bonnet, n� � Bassillac le 23 juillet 1889, d�c�d� � Paris le 18 juin 1973, homme politique fran�ais.
    Maxence Bibi� est un homme politique fran�ais n� le 11 janvier 1891 � Allemans et d�c�d� le 24 mai 1950 � P�rigueux.
    Camille Bedin est un homme politique fran�ais, n�gociant en tissus de profession, n� le 8 janvier 1893 � Saint-Satur (Cher) et mort le 7 f�vrier 1979 � Excideuil.
    Marc de Mol�nes, avocat et un homme politique fran�ais n� le 5 septembre 1896 dans le 9e arrondissement de Paris et d�c�d� le 24 septembre 1934 dans le 16e arrondissement de Paris. En 1932, il se pr�sente aux �lections l�gislatives dans la deuxi�me circonscription de P�rigueux et bat le candidat sortant Cl�ment Cazaud, radical ind�pendant. Parlementaire actif, il est �lu secr�taire de la Chambre des d�put�s � deux reprises avant de mourir pr�matur�ment de maladie, � l'�ge de 38 ans.
    Robert Lacoste est n� � Azerat le 5 juillet 1898 et est mort � P�rigueux le 8 mars 1989. Homme politique fran�ais, il fut d�put� socialiste de la Dordogne de 1945 � 1958 et de 1962 � 1967 puis s�nateur de 1971 � 1980.
    Pierre Sarrazin n� � Saint-M�dard-de-Guizi�res (Gironde) le 8 avril 1854 et d�c�d� le 18 mai 1931 � Sarlat-la-Can�da, est un m�decin et homme politique fran�ais, maire de Sarlat-la-Can�da de 1889 � 1924, d�put� de la premi�re circonscription de Sarlat du 28 juin 1896 � 1919.

XXe si�cle

    Jean-Jacques Juglas est un homme politique fran�ais, n� le 10 juin 1904 � Bergerac et d�c�d� le 17 ao�t 1982 � Paris.
    Henri Laforest est un homme politique, n� le 19 juillet 1904 � Nontron et d�c�d� le 13 janvier 1989 au m�me lieu.
    Lucien Dutard (Lucien Jean Dutard) est un homme politique fran�ais, n� au Buisson le 22 f�vrier 1912 et d�c�d� le 1er juillet 2003.
    Fred Zeller (Fr�d�ric Victor Zeller), n� le 26 mars 1912 � Paris et mort le 7 f�vrier 2003 � Bergerac, est un homme politique et un artiste peintre fran�ais.
    Fernand Dupuy est un homme politique fran�ais. Il est n� le 2 mars 1917 � Jumilhac-le-Grand et d�c�d� le 15 juin 1999 � Limoges.
    Maurice Faure, n� le 2 janvier 1922 � Azerat et mort le 6 mars 2014 � Cahors, est un ancien r�sistant et homme politique fran�ais.
    Yves Gu�na, homme politique fran�ais (n� � Brest le 6 juillet 1922) : engag� FFL (1940�1945) ; d�put� de la Dordogne (1962�1981, 1986�1988 RPR) ; ministre : P&T (1967�1968), Information (1968), P&T (1968�1969), Transports (1973�1974), Industrie, Commerce et Artisanat (1974) ; conseiller g�n�ral de la Dordogne (1970�1989) ; maire de P�rigueux (1971�1997) ; s�nateur de la Dordogne (1989�1997) ; vice-pr�sident du S�nat (1992�1997) ; membre et pr�sident du Conseil constitutionnel (1997�2004) ; pr�sident de l'Institut du monde arabe (2004�2007).
    Roland Dumas, (n� le 23 ao�t 1922 � Limoges), homme politique fran�ais ; d�put� de Sarlat ; membre et pr�sident Conseil constitutionnel.
    Pierre Arpaillange (n� � Simeyrols le 13 mars 1924) est un magistrat et ministre fran�ais.
    Roger Roudier est un homme politique fran�ais n� le 13 mai 1926 � La Villedieu.
    Lucien Delmas est un homme politique fran�ais n� le 19 juin 1931 � Terrasson et d�c�d� le 5 f�vrier 1988 � Bordeaux (Gironde).
    Ren� Dutin est un homme politique fran�ais n� le 18 d�cembre 1933 � Abjat-sur-Bandiat.
    Alain Paul Bonnet, n� � Paris le 10 janvier 1934, fils de l'ancien ministre Georges Bonnet, est un homme politique fran�ais. Il fut d�put� de la troisi�me circonscription de la Dordogne de 1973 � 1993. Au plan local, il fut �galement : maire de Brant�me de 1965 � 1989 puis de 1995 � 2001, conseiller g�n�ral du canton de Champagnac-de-Belair de 1964 � 1992 18,
    G�rard Fayolle est un homme politique fran�ais n� le 11 octobre 1937 au Bugue.
    Henri Nallet, n� le 6 janvier 1939 � Bergerac, est un homme politique fran�ais.
    Jean Ganiayre (en occitan Joan Ganhaire) est n� le 21 mai 1941 � Agen en Lot-et-Garonne. C'est un �crivain occitan utilisant le dialecte limousin. Il est �galement conseiller g�n�ral du canton de Brant�me.
    Christian Fr�mont, n� en 1942 en Dordogne, est un haut fonctionnaire fran�ais. Il assure depuis le 28 juillet 2008 le poste de directeur de cabinet du pr�sident de la R�publique Nicolas Sarkozy. Christian Fr�mont est �galement un ancien professeur de lettres, amoureux des po�tes du XIXe si�cle.
    Michel Debet, homme politique fran�ais, n� le 12 octobre 1944 � Tocane-Saint-Apre et d�c�d� le 6 mars 2008 � P�rigueux.
    Patrick Ollier (n� le 17 d�cembre 1944 � P�rigueux est un homme politique fran�ais, pr�sident de l'Assembl�e nationale du 7 mars au 19 juin 2007.
    Christian Monteil est un homme politique fran�ais, n� en 1946 � Larzac. Maire de Seyssel (2024 hab., chef-lieu de canton), conseiller g�n�ral depuis 1991, il est pr�sident du Conseil g�n�ral de la Haute-Savoie depuis mars 2008.
    Jean-Jacques de Peretti, (n� en 1946 � Clermont-Ferrand), homme politique fran�ais ; ministre de l'Outre-mer en 1995, maire de Sarlat-la-Can�da depuis 1989.
    Xavier Darcos, (n� en 1947 � Limoges), homme politique fran�ais ; ministre : d�l�gu� � l�Enseignement scolaire (mai 2002�mars 2004), d�l�gu� aux Affaires �trang�res (coop�ration, francophonie) (mars 2004�juin 2005), �ducation nationale (depuis le 18 mai 2007) ; maire de P�rigueux de 1997 � 2002 puis de 2005 � 2008 ; s�nateur de la Dordogne (1998-2002)
    Christine Deviers-Joncour, n�e le 28 juin 1947 � La Cassagne est devenue c�l�bre du fait de son implication dans l'affaire Elf.
    Fran�ois Roussel est un homme politique fran�ais n� le 4 ao�t 1947 � Guer dans le Morbihan, maire de Neuvic depuis 1983.
    Daniel Garrigue, est un homme politique fran�ais n� le 4 avril 1948 � Talence dans la Gironde Il est �lu pour la premi�re fois conseiller g�n�ral de la Dordogne, lors des cantonales de 1992, puis �lu d�put� de la 2e circonscription de la Dordogne en 1993. Il est �lu maire de Bergerac de 1995 � 2008. Ayant perdu son si�ge de d�put� aux l�gislatives de 1997, il le retrouve en 2002, et est r��lu d�put� de la Dordogne en 2007. Il remporte les cantonales le 28 mars 2011 et devient conseiller g�n�ral de Bergerac.
    Germinal Peiro, est un homme politique fran�ais, n� le 15 septembre 1953 � L�zignan-Corbi�res (Aude). Il est r��lu d�put� le 16 juin 2007, pour la XIIIe l�gislature (2007-2012), dans la 4e circonscription de la Dordogne. Il fait partie du groupe socialiste. On lui doit la loi Peiro, vot�e en 1998, qui instaure la retraite compl�mentaire obligatoire pour les agriculteurs.
    Dominique Bousquet est un homme politique fran�ais, n� le 23 septembre 1953 � Brive-la-Gaillarde (Corr�ze). V�t�rinaire de profession, il est adh�rent de l'Union pour un mouvement populaire apr�s avoir �t� membre du Rassemblement pour la R�publique et pr�sident du groupe "Union des D�mocrates de la Dordogne" du Conseil G�n�ral de la Dordogne.
    Bernard Gauducheau est un homme politique fran�ais, n� le 26 juin 1955 � P�rigueux.
    Pascal Deguilhem, professeur de facult� et homme politique, est n� le 9 f�vrier 1956 � Brouchaud.
    Colette Langlade, n�e le 20 juin 1956 � Sorges, est une femme politique fran�aise, membre du PS.
    J�r�me Peyrat, n� le 28 novembre 1962 � Sarlat, est un haut fonctionnaire et homme politique fran�ais.

Personnalit�s militaires
XVIIIe si�cle

    Nicolas Beaupuy (Mussidan 1750 - Mussidan 19 septembre 1802) est un militaire et homme politique fran�ais.
    Michel de Beaupuy (Armand-Michel Bachelier de Beaupuy), n� � Mussidan en 1757, tu� au Val d'Enfer en 1796, est un g�n�ral fran�ais de la R�volution.
    Jacques d'Izarn de Valady (Jacques d'Izarn de Fraissinet de Valady), comte de Valady, n� le 23 septembre 1766 � Villefranche-de-Rouergue - mort le 24 d�cembre 1793 � P�rigueux, est un militaire fran�ais, d�put� sous la R�volution fran�aise, fusill� sous la Terreur.
    Pierre Yrieix Daumesnil (1777�1832), g�n�ral d'Empire, n� � P�rigueux
    Thomas-Robert Bugeaud (1784-1849), duc d'Isly, g�n�ral puis mar�chal de France, maire d�Excideuil entre 1825 et 1830 et d�put� d�Excideuil de 1831 � 1848

XIXe si�cle

    Armand Alexandre Emmanuel d'Hautefort (ou de Hautefort), est un g�n�ral de brigade fran�ais. N� le 5 mai 1823, � Saint-Laurent en Dordogne, il est le fils du Armand-Joseph-Camille marquis d'Hautefort, inspecteur des postes � Nancy et d'Anne-Laure Bertin. Mort � Paris, le 28 octobre 1903.
    Louis Philippe Maine est n� le 4 septembre 1830 � Mussidan, mort en 1893 � Douzillac.

Personnalit�s religieuses
XVe si�cle

    Pierre d'Abzac de La Douze est un pr�lat fran�ais du XVe si�cle, n� en 1427 et mort en 1502 � La Douze, qui fut �v�que de Rieux, de Lectoure, puis archev�que de Narbonne.

XVIIIe si�cle

    Guillaume-Antoine Delfaud ou Guillaume Delfaud (n� en 1733 � L'�tang-de-Lol � Daglan, mort le 2 septembre 1792 � Paris) �tait un religieux j�suite et homme politique fran�ais, dont l'activit� s'exer�a pendant la p�riode de la R�volution.
    Jean Marie du Lau d'Allemans, n� le 30 octobre 1738 au Ch�teau de la C�te � Biras, et assassin� le 2 septembre 1792 � Paris, aux Carmes, est archev�que d�Arles (du 1er octobre 1775 -1790). Il est consid�r� comme bienheureux et martyr par l��glise catholique.
    Guillaume-Joseph Chaminade, n� le 8 avril 1761 � P�rigueux, et mort � Bordeaux le 22 janvier 1850. Il �tait un pr�tre fran�ais, fondateur des Filles de Marie Immacul�e et de la Soci�t� de Marie (Marianistes). Il fut b�atifi� en septembre 2000.
    Antoine Auriel-Constant, N� � Manobre (commune de Sainte-Mondane) en 1764, mort en 1794 sur les pontons de Rochefort, le bienheureux Antoine Auriel-Constant a �t� pr�tre pour le dioc�se de Cahors et martyris� durant la Terreur.
    Ami Bost, pasteur protestant, est n� le 10 juin 1790 � Gen�ve, il est d�c�d� le 24 d�cembre 1874 � La Force).

XXe si�cle

    Robert B�zac des Martinies (1904-1989), �v�que d'Aire et Dax de 1963 � 1978, est n� � P�rigueux.
    Madeleine Delbr�l, n�e le 24 octobre 1904 � Mussidan et d�c�d�e le 13 octobre 1964, �tait une mystique chr�tienne fran�aise, assistante sociale, essayiste et po�tesse.

Artistes
XIXe si�cle

    Jacques-�mile Lafon (P�rigueux 1817-1886) est un peintre fran�ais
    Jean Baptiste Antoine Guillemet, n� � Chantilly le 30 juin 1841 et mort en Dordogne en 1918, est un peintre paysagiste fran�ais de style impressionniste.
    Auguste Lep�re (Louis Auguste Lep�re), n� � Paris le 30 novembre 1849 et mort � Domme le 20 novembre 1918, est un graveur, illustrateur et peintre fran�ais.
    Jean Carlus (n� en 1852 � Lavaur, - mort en 1930) �tait un sculpteur fran�ais, dont l'�uvre reste largement m�connue.
    Georges Goursat dit Sem est un affichiste, caricaturiste, chroniqueur mondain, illustrateur et �crivain tardif. Il inaugure en 1900, une carri�re parisienne qui se prolonge aujourd�hui dans des salles de vente � New York ou au Japon. Il est n� � P�rigueux en 1863 et mort � Paris en 1934.
    Georges Halbout du Tanney est un sculpteur fran�ais, n� � Paris le 15 d�cembre 1895, d�c�d� � Bourdeilles le 7 juin 1986.

XXe si�cle

    Jacques Teulet, n� le 20 f�vrier 1949 � Alles-sur-Dordogne, est un artiste-peintre, graphiste et lithographe figuratif fran�ais.

Cin�ma, th��tre, acteurs
XIXe si�cle

    Paul Mounet, n� Jean-Paul Sully le 5 octobre 1847 � Bergerac, d�c�d� le 10 f�vrier 1922 � Paris (France), �tait un acteur fran�ais.
    Jean Murat est un acteur fran�ais, n� le 13 juillet 1888 � P�rigueux et d�c�d� le jeudi 4 janvier 1968 � Aix-en-Provence (Bouches-du-Rh�ne).
    Louis Delluc (1890�1924), n� � Cadouin, critique et cin�aste, �veilleur du cin�ma fran�ais

XXe si�cle

    Georges Marchal, (Georges Louis Marchal), n� le 10 janvier 1920 � Nancy et d�c�d� le 28 novembre 1997 � Maurens, est un acteur fran�ais.
    Jacques Rispal, n� le 1er ao�t 1923 � Belv�s et mort le 9 f�vrier 1986 � Suresnes (Hauts-de-Seine), est un acteur fran�ais.

Banquiers, �conomistes, industriels, hommes d'affaires
XIXe si�cle

    Jean-Gustave Courcelle-Seneuil, n� � Seneuil, hameau de la commune de Vanxains, le 22 d�cembre 1813 et mort � Paris le 29 juin 1892, est un �conomiste fran�ais de l'�cole lib�rale.
    L�on Faure est un industriel fran�ais n� le 12 d�cembre 1866 � Azerat et d�c�d� le 19 mars 1951.
    Jean-Georges Villepontoux (1884-1963) fut au XXe si�cle l'une des grandes figures de la Banque de France dont il dirigea le Contr�le G�n�ral. Il �tait �galement Chevalier de la L�gion d'honneur et membre de la Soci�t� de g�ographie.
    Sylvain Floirat (1899-1993), n� le 28 septembre 1899 � Nailhac, industriel et homme d'affaires.

XXe si�cle

    Claude B�b�ar, n� le 29 juillet 1935 � Issac, est un homme d'affaires fran�ais.

�crivains, philosophes, po�tes, chansonniers, journalistes
XIIe si�cle

    Bertran de Born, (v.1140 - v.1215), un des plus c�l�bres troubadours, seigneur de Hautefort au XIIe si�cle
    Arnaut Daniel, (XIIe si�cle), consid�r� comme l'un des plus virtuoses troubadours, n� � Rib�rac

XVIe si�cle

    �tienne de La Bo�tie, (1530-1563), �crivain et philosophe fran�ais, n� � Sarlat
    Michel de Montaigne, (1533-1592), �crivain philosophe fran�ais, n� � Saint-Michel-de-Montaigne
    Pierre de Bourdeille dit Brant�me, (v. 1540-1614), �crivain fran�ais, seigneur de Brant�me, n� � Bourdeilles


*/