export const ARCHIVE_CATEGORIES = [
  'All',
  'Materials',
  'Designers',
  'Design Movements',
  'Buying Guides',
  'Care & Restoration',
];

export const ARCHIVE_ARTICLES = [

  // ── MATERIALS ────────────────────────────────────────────────────────────────
  {
    id: 'mat-leather',
    title: 'The Character of Leather',
    subtitle: 'How to identify quality hides, understand grading, and care for pieces that only improve with age',
    category: 'Materials',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/arc-leather/600/400',
    heroImage: 'https://picsum.photos/seed/arc-leather-hero/1400/700',
    tags: ['leather', 'materials', 'care', 'furniture', 'clothing'],
    relatedProductTags: ['leather', 'journal'],
    sections: [
      {
        type: 'lead',
        text: 'Full-grain leather is the top layer of the hide — the surface that faced the world, absorbing sunlight and rain, bearing the natural markings that make each piece singular. It is the only grade that develops a patina, deepening in colour and acquiring a character that no newly manufactured object can replicate.',
      },
      {
        type: 'h2',
        text: 'Understanding the Grades',
      },
      {
        type: 'p',
        text: 'The leather industry works in grades, and the difference between them is the difference between an heirloom and a disappointment. Full-grain retains the original surface texture — pores, small scars, variations in colour — and is the strongest and most durable form. Top-grain is sanded and buffed to remove imperfections, creating a more uniform surface at the cost of breathability and character. Corrected-grain goes further still, applying an embossed grain pattern over a heavily processed hide. Bonded leather, at the bottom, is leather dust reconstituted with polyurethane — it peels, ages badly, and tells you nothing about the animal whose life it comes from.',
      },
      {
        type: 'pullquote',
        text: 'The marks you see in full-grain leather are not flaws — they are proof of life. A small scar, an area of denser grain where the animal bent a knee: these are the things that make a piece unrepeatable.',
      },
      {
        type: 'h2',
        text: 'How to Identify Quality at a Glance',
      },
      {
        type: 'p',
        text: 'Press your thumb into the surface and release it. Full-grain leather will spring back slowly and evenly; bonded or low-grade leather springs back immediately, like foam. Hold the piece to light at a low angle — you should see a subtle topography of pores and grain, not a uniform plastic-like sheen. Smell it. Real leather has a distinct, warm, slightly animal scent that synthetic materials cannot replicate convincingly. Check the edges: on quality pieces, the edge will be burnished or hand-painted to a clean finish; on cheaper goods, it will be raw and fraying.',
      },
      {
        type: 'h2',
        text: 'The Patina Question',
      },
      {
        type: 'p',
        text: 'Patina is the accumulation of use — the oils from hands, the light from windows, the way a bag is set down on the same table every evening. It darkens the grain, smooths the high points, and produces a surface that is completely unique to its owner. This is why a well-used full-grain leather bag is often more beautiful at twenty years than at twenty weeks. It is also why you should never over-condition vintage leather: a light application of quality beeswax or lanolin conditioner once or twice a year is enough.',
      },
      {
        type: 'tip',
        title: 'Quick Test',
        text: 'Wet a small, inconspicuous area with a drop of water. Full-grain leather will darken slightly and absorb it; synthetic or heavily treated leather will bead the water on the surface.',
      },
    ],
  },

  {
    id: 'mat-walnut',
    title: 'Walnut — The Cabinetmaker\'s Wood',
    subtitle: 'Identifying solid wood from veneer, reading grain patterns, and understanding why this dark hardwood has defined fine furniture for three centuries',
    category: 'Materials',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/arc-walnut/600/400',
    heroImage: 'https://picsum.photos/seed/arc-walnut-hero/1400/700',
    tags: ['walnut', 'wood', 'furniture', 'materials'],
    relatedProductTags: ['walnut', 'oak', 'wood', 'organizer'],
    sections: [
      {
        type: 'lead',
        text: 'Walnut has a particular quality of darkness — a warm, chocolate brown that sits closer to shadow than to light. It does not try to disappear into a room. Furniture makers have prized it for centuries precisely because of this presence, and because its tight grain takes a finish like almost no other wood.',
      },
      {
        type: 'h2',
        text: 'Solid Wood vs Veneer',
      },
      {
        type: 'p',
        text: 'The distinction between solid walnut and walnut-veneered furniture is more nuanced than it first appears. Veneer is not inherently inferior — a hand-cut walnut veneer over a stable hardwood substrate can be extraordinary furniture, and many celebrated 20th-century pieces used it deliberately for its figure and dimensional stability. The issue is engineered substrates: MDF or particleboard with a thin veneer applied to the surface. These pieces cannot be refinished, they are vulnerable to moisture, and they age poorly. To identify solid wood, look at the end grain if the piece allows it. Veneer ends are abrupt — the surface pattern simply stops. On solid pieces, the grain continues around corners with the same flow.',
      },
      {
        type: 'pullquote',
        text: 'Walnut does not bleach or fade in the way lighter woods do. Instead it develops a golden undertone at the surface while retaining its depth — a slow transformation that can take decades.',
      },
      {
        type: 'h2',
        text: 'Reading Grain',
      },
      {
        type: 'p',
        text: 'Straight-grain walnut is the most common and the most practical for structural pieces. Figured grain — crotch figure, burl, curl — appears where the tree has grown under stress or around a major fork, producing swirling, unpredictable patterns. Figured walnut commands a premium and is typically reserved for tabletops and drawer fronts where it can be shown flat. When examining a piece, tilt the surface at an angle under light: the grain should have a three-dimensional depth, almost as if you can reach into it. Flat, printed patterns lack this optical quality entirely.',
      },
      {
        type: 'h2',
        text: 'The Ageing Process',
      },
      {
        type: 'p',
        text: 'Freshly machined walnut is a deep, almost purple-tinged brown. Over years of light exposure, the surface colour shifts toward a warmer amber while the underlying wood darkens. This is photochemical change, and it is part of the material\'s character. When buying vintage walnut furniture, look for this warm, complex tonality: it indicates a piece that has genuinely aged rather than been recently refinished to look old.',
      },
    ],
  },

  {
    id: 'mat-brass',
    title: 'Brass, Bronze & Patina',
    subtitle: 'Understanding the difference between these alloys, why they tarnish, and how a rich natural patina indicates age and authenticity',
    category: 'Materials',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/arc-brass/600/400',
    heroImage: 'https://picsum.photos/seed/arc-brass-hero/1400/700',
    tags: ['brass', 'bronze', 'metal', 'materials', 'care'],
    relatedProductTags: ['carafe', 'glass', 'ceramic'],
    sections: [
      {
        type: 'lead',
        text: 'Brass is copper and zinc; bronze is copper and tin. The difference in composition produces different colours, different working properties, and different patinas — but both share the fundamental quality of ageing gracefully and honestly, in ways that communicate directly the history of an object.',
      },
      {
        type: 'h2',
        text: 'Identifying Brass and Bronze',
      },
      {
        type: 'p',
        text: 'New brass is a bright, clean yellow — closer to gold than to orange. It will tarnish over time to a duller, darker tone, then develop green-grey oxide patches if exposed to moisture. Bronze starts warmer and more reddish-brown, and its patina develops to rich browns and deep greens. Plated items — brass or bronze over steel or zinc — are distinguished by worn patches at high points where the base metal shows through. The surest test is a small magnet: brass and bronze are not magnetic; steel base metals are.',
      },
      {
        type: 'pullquote',
        text: 'A natural patina on brass or bronze is not corrosion — it is the record of the object\'s life. Polishing it away erases that record, and the piece will never quite look the same again.',
      },
      {
        type: 'h2',
        text: 'To Polish or Not',
      },
      {
        type: 'p',
        text: 'Whether to polish vintage metalwork is a matter of intent. If the piece is decorative and you want to understand what it looked like new, a single careful polish with a soft cloth and a light, non-abrasive cleaner is fine. But if the patina is rich, even, and genuinely old, consider leaving it. Collectors of mid-century bronze lighting will pay a significant premium for unpolished patina that has developed naturally over decades. Once polished, the patina must develop again — a process that takes years and cannot be artificially accelerated convincingly.',
      },
    ],
  },

  // ── DESIGNERS ────────────────────────────────────────────────────────────────
  {
    id: 'des-eames',
    title: 'Charles & Ray Eames',
    subtitle: 'The partnership that changed how the world sits, eats, and plays — and what to know before buying',
    category: 'Designers',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/arc-eames/600/400',
    heroImage: 'https://picsum.photos/seed/arc-eames-hero/1400/700',
    tags: ['eames', 'mid-century', 'designers', 'furniture', 'authentication'],
    relatedProductTags: ['chair', 'furniture', 'stool'],
    sections: [
      {
        type: 'lead',
        text: 'Charles and Ray Eames produced some of the most copied furniture in design history. The Lounge Chair and Ottoman, the Plastic Chairs, the Eames Rocker — all have been reproduced, approximated, and outright counterfeited so many times that buying "Eames" furniture requires careful attention to a set of details that manufacturers have been refining since the late 1940s.',
      },
      {
        type: 'h2',
        text: 'The Herman Miller Question',
      },
      {
        type: 'p',
        text: 'The Eames Office partnered with Herman Miller in 1950, and authentic American-market pieces bear their label. Earlier pieces (1946–1950) were produced by Evans Products Company before Herman Miller acquired the line. In Europe, Vitra has held the licence since 1957. Any authentic Eames piece will have one of these manufacturer\'s labels, along with a date of production. The label on the Lounge Chair (670) is found on the underside of the seat shell; on plastic side chairs, it appears as a moulded mark on the underside of the shell. The absence of any labelling, or the presence of unfamiliar manufacturer names, is a clear indication of a reproduction.',
      },
      {
        type: 'pullquote',
        text: 'The replica market for Eames furniture is enormous. A genuine Eames Lounge Chair in excellent condition is worth substantially more than any reproduction. Learning to tell them apart takes study, but it repays the effort.',
      },
      {
        type: 'h2',
        text: 'Physical Tells',
      },
      {
        type: 'p',
        text: 'On the Lounge Chair, examine the rosewood or walnut veneer on the shell panels. Original shells show a tight, consistent grain with a slight warmth to the finish; many reproductions use cheaper wood or printed grain film. The aluminium base should be cast, not extruded — it will have weight and slight surface variation. The leather on original pieces is thick and slightly textured; replica leather is often thinner and uniformly smooth. Crucially, the original chair has a very specific recline angle and pivot mechanism: sit in it, and it will feel different from a copy in ways that are difficult to articulate but immediately apparent.',
      },
      {
        type: 'h2',
        text: 'The Plastic Chairs',
      },
      {
        type: 'p',
        text: 'The DAR, DAX, DAW, and their side-chair equivalents were originally made in fibreglass-reinforced plastic — a material chosen in the late 1940s for its strength and formability. Production switched to polypropylene in the 1990s for environmental reasons. Early fibreglass shells are identifiable by their slightly translucent quality when held to strong light, their greater surface texture, and their weight. They are significantly more valuable than later polypropylene versions. Both, if genuine, will carry the Herman Miller or Vitra mark.',
      },
    ],
  },

  {
    id: 'des-gray',
    title: 'Eileen Gray',
    subtitle: 'The Irish designer who invented her own modernism — a guide to her key pieces and their extraordinary values',
    category: 'Designers',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/arc-eileen/600/400',
    heroImage: 'https://picsum.photos/seed/arc-eileen-hero/1400/700',
    tags: ['eileen gray', 'designers', 'art deco', 'furniture', 'modernism'],
    relatedProductTags: ['table', 'furniture', 'side'],
    sections: [
      {
        type: 'lead',
        text: 'Eileen Gray worked outside the movements that defined her era. She was contemporary with the Bauhaus but not of it; she was fluent in Art Deco lacquerwork but transcended it; she designed furniture of such clarity that it still looks current today. The E1027 adjustable side table, designed in 1927, has become one of the most recognised pieces of 20th-century furniture — and one of the most reproduced.',
      },
      {
        type: 'h2',
        text: 'The E1027 Table',
      },
      {
        type: 'p',
        text: 'The E1027 table was designed for Gray\'s Villa E1027 on the Côte d\'Azur. The name encodes the initials of Gray and her partner Jean Badovici: E for Eileen, 10 for J, 2 for B, and 7 for G. The table consists of a tubular steel base with a flat glass or metal top that can be raised, lowered, and cantilevered over a chair or bed. Current production rights are held by Classicon; vintage examples from the 1970s and 1980s vary significantly in quality. Identifying the manufacturer is essential for valuation.',
      },
      {
        type: 'pullquote',
        text: 'Gray spent years in relative obscurity. When Yves Saint Laurent bid at auction for one of her lacquer panels in the late 1970s, the art world rediscovered a designer who had been almost entirely forgotten.',
      },
      {
        type: 'h2',
        text: 'The Bibendum Chair',
      },
      {
        type: 'p',
        text: 'Named for the Michelin Man whose rounded form it evokes, this armchair from 1926 is among Gray\'s most collected works. Original examples are museum-held; the contemporary licensed version from Classicon is the standard reference point. The chair\'s structure is tubular steel with upholstered rounded forms — deceptively simple in description but demanding in execution. Reproductions typically reveal themselves in the tightness of the upholstery curves and the quality of the frame joinery.',
      },
    ],
  },

  {
    id: 'des-fornasetti',
    title: 'Fornasetti\'s Obsession',
    subtitle: 'The Milanese decorator who built a world from a single face — and a collector\'s guide to his pieces',
    category: 'Designers',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/arc-fornasetti/600/400',
    heroImage: 'https://picsum.photos/seed/arc-fornasetti-hero/1400/700',
    tags: ['fornasetti', 'designers', 'decorative arts', 'italian design', 'plates', 'ceramics'],
    relatedProductTags: ['ceramic', 'pour-over', 'decorative'],
    sections: [
      {
        type: 'lead',
        text: 'Piero Fornasetti found a face in a 19th-century magazine — an operatic soprano named Lina Cavalieri — and spent the rest of his life drawing variations on it. Over 40 years he produced more than 350 plates in the Tema e Variazioni series, each depicting Cavalieri\'s face transformed by some architectural, astronomical, or surreal addition. The plates are, collectively, one of the great examples of obsessive decorative art in the 20th century.',
      },
      {
        type: 'h2',
        text: 'Identifying Period Pieces',
      },
      {
        type: 'p',
        text: 'Fornasetti pieces produced during Piero\'s lifetime (he died in 1988) are stamped on the reverse with either "Fornasetti Milano" or "Fornasetti" along with a series designation and number. The printed mark will be clean and precise; the porcelain body of authentic pieces is high-quality, with a consistent glaze. After Piero\'s death, his son Barnaba has continued the studio, and current production pieces are clearly marked as such. The distinction between early production, limited editions, and current pieces is crucial for collectors, as values vary dramatically.',
      },
      {
        type: 'h2',
        text: 'Beyond the Plates',
      },
      {
        type: 'p',
        text: 'Fornasetti\'s output extended far beyond the Cavalieri plates. He decorated furniture (often in collaboration with Gio Ponti), produced printed fabrics, designed objects from ashtrays to umbrellas, and applied his technique — black-and-white lithographic imagery on lacquered surfaces — to practically every category of object. Trays, lacquered plates, and small boxes represent accessible entry points; large decorated commodes or cabinets, if genuine and in good condition, represent significant investment pieces.',
      },
    ],
  },

  // ── DESIGN MOVEMENTS ─────────────────────────────────────────────────────────
  {
    id: 'mov-midcentury',
    title: 'Understanding Mid-Century Modern',
    subtitle: 'What the term actually means, why it endures, and how to identify the real from the imitation',
    category: 'Design Movements',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/arc-mcm/600/400',
    heroImage: 'https://picsum.photos/seed/arc-mcm-hero/1400/700',
    tags: ['mid-century modern', 'design movements', 'furniture', 'collecting'],
    relatedProductTags: ['walnut', 'chair', 'furniture', 'organizer'],
    sections: [
      {
        type: 'lead',
        text: '"Mid-century modern" has become the most overused term in the secondhand furniture market — applied to almost anything made between 1945 and 1975 that features tapered legs. Understanding what the term actually describes makes it easier to find genuinely good pieces rather than merely period pieces.',
      },
      {
        type: 'h2',
        text: 'The Movement\'s Origins',
      },
      {
        type: 'p',
        text: 'Mid-century modernism emerged from a convergence of forces: post-war optimism about new materials and manufacturing processes, the influence of European modernist émigrés (many of them Bauhaus-trained) on American design education, and the democratisation of good design through mass production. The furniture that came out of this period — from Knoll, Herman Miller, Cassina, Fritz Hansen — was often built to a quality standard that now reads as extraordinary, because the cost of labour and materials made it economically rational to do things properly.',
      },
      {
        type: 'pullquote',
        text: 'The original mid-century modernists were obsessed with function — with making things that worked well and could be made at scale. The aesthetic was a consequence of that ambition, not its purpose.',
      },
      {
        type: 'h2',
        text: 'Identifying Quality Period Pieces',
      },
      {
        type: 'p',
        text: 'The signature materials of the movement — teak, rosewood, walnut, aluminium, fibreglass, moulded plywood — all age in characteristic ways. Danish teak furniture from the 1950s and 60s will have a particular quality of surface finish: often lightly oiled, with a warm, slightly dusty tone. The joints will be visible and proud rather than concealed. Drawers will be solid wood, not veneered MDF, and they will fit precisely. A quick tell for genuine quality is whether the manufacturer was willing to finish what no one would normally see — the back panel, the underside, the interior of a cabinet.',
      },
      {
        type: 'h2',
        text: 'Common Reproductions',
      },
      {
        type: 'p',
        text: 'Key signs of a reproduction: uniform veneer with no natural variation, drawer bottoms that are thin MDF or hardboard, legs that are screwed rather than mortised, and hardware that looks newly machined rather than worn. Genuine pieces show their age in particular ways — slight loosening at joints, wear at high points, a patina on metal that is even rather than spotty.',
      },
    ],
  },

  {
    id: 'mov-bauhaus',
    title: 'The Bauhaus Principle',
    subtitle: 'A school that lasted 14 years and changed everything — what it stood for, who taught there, and its legacy in the objects we collect',
    category: 'Design Movements',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/arc-bauhaus/600/400',
    heroImage: 'https://picsum.photos/seed/arc-bauhaus-hero/1400/700',
    tags: ['bauhaus', 'design movements', 'modernism', 'germany', 'design history'],
    relatedProductTags: ['steel', 'desk', 'organizer', 'lamp'],
    sections: [
      {
        type: 'lead',
        text: 'The Bauhaus school existed for exactly fourteen years — from 1919 to 1933, when the Nazis forced it to close. In that time it produced a body of work and a generation of designers who changed the visual language of the 20th century. The clean sans-serif typefaces on your screen, the tubular steel furniture you sit in, the idea that a building should be considered as a designed object — all of this flows directly from Dessau and Weimar.',
      },
      {
        type: 'h2',
        text: 'The Philosophy',
      },
      {
        type: 'p',
        text: 'Walter Gropius founded the school with a simple idea: that art, craft, and industrial production should be unified rather than separated. Students at the Bauhaus learned from two masters simultaneously — a master of craft and a master of form. The workshop structure meant that every student learned to make things as well as to design them. This integration of thinking and making produced designers who understood materials, processes, and the relationship between a drawing and an object in ways that purely theoretical design education never could.',
      },
      {
        type: 'pullquote',
        text: 'The Bauhaus did not have a style. It had a method: start from the material, start from the function, and arrive at a form that could not be otherwise. The "look" was a consequence of that rigour, not its goal.',
      },
      {
        type: 'h2',
        text: 'The Key Figures',
      },
      {
        type: 'p',
        text: 'Marcel Breuer designed the Wassily chair in 1925, using bicycle-handlebar-grade tubular steel in furniture for the first time — a gesture that acknowledged the industrial age rather than trying to decorate around it. Mies van der Rohe, who directed the school from 1930, produced the Barcelona Chair in 1929. Wilhelm Wagenfeld designed the WA24 table lamp in 1924 — perhaps the most widely reproduced lamp in history, still in production. Herbert Bayer developed the Universal typeface, which anticipated the geometric sans-serifs that now dominate digital communication.',
      },
      {
        type: 'h2',
        text: 'Collecting Bauhaus Work',
      },
      {
        type: 'p',
        text: 'Genuine Bauhaus-period pieces are museum objects. What the collector market offers are licensed reproductions and, more valuably, the work of second and third-generation Bauhaus-influenced designers working through the 1950s–70s. Pieces from Knoll, Tecta, and Zanotta carry forward the tradition with legitimate provenance. When a piece is described as "Bauhaus-style," treat it as a compliment and nothing more; when it is attributed to a specific Bauhaus master, demand documentation.',
      },
    ],
  },

  {
    id: 'mov-scandinavian',
    title: 'Scandinavian Design',
    subtitle: 'The values behind the aesthetic — and what distinguishes the genuine article from the copies',
    category: 'Design Movements',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/arc-scandi/600/400',
    heroImage: 'https://picsum.photos/seed/arc-scandi-hero/1400/700',
    tags: ['scandinavian', 'design movements', 'nordic', 'danish', 'furniture'],
    relatedProductTags: ['linen', 'wool', 'throw', 'pillow'],
    sections: [
      {
        type: 'lead',
        text: 'The Danish design tradition that produced Arne Jacobsen\'s Egg Chair and Hans Wegner\'s Wishbone Chair was not primarily concerned with aesthetics. It was concerned with the relationship between human beings and the objects they live with daily — with ergonomics, with natural materials, with the kind of satisfaction that comes from using a well-made thing. The beauty was consequential.',
      },
      {
        type: 'h2',
        text: 'The Material Philosophy',
      },
      {
        type: 'p',
        text: 'Scandinavian design has a particular relationship with wood — specifically with teak, oak, and beech. These materials were chosen not for their appearance alone but for their properties: teak\'s natural oils made it resistant to moisture; oak\'s hardness and open grain made it suitable for hand-finishing; beech\'s fine, consistent texture made it ideal for bent-wood techniques. The joinery in quality Danish furniture of the 1950s and 60s is often extraordinary — visible, expressive, and structurally perfect. The Y-leg joint on a Wegner chair is not just functional; it is a statement about what furniture can be.',
      },
      {
        type: 'pullquote',
        text: 'Wegner said that a chair is never finished. You keep refining it until there is nothing left to remove. This sounds like Modernism, but it is older than that — it is the cabinetmaker\'s tradition of Jutland.',
      },
      {
        type: 'h2',
        text: 'Buying Danish Vintage',
      },
      {
        type: 'p',
        text: 'Quality Danish furniture from the 1950s–70s is well-documented and relatively well-labelled. Most pieces from reputable manufacturers (PP Møbler, Fritz Hansen, Carl Hansen) carry paper labels, stamps, or branded marks on the underside. The wood should show its age: a slight darkening of the surface, wear at contact points, a hand-applied oil finish rather than a modern lacquer. Chairs should sit solidly with no wobble; any looseness in the joints indicates a piece that needs restoration before use, which is worth factoring into price.',
      },
    ],
  },

  // ── BUYING GUIDES ────────────────────────────────────────────────────────────
  {
    id: 'buy-furniture',
    title: 'Buying Second Hand Furniture',
    subtitle: 'A methodical inspection guide — what to look for, what to avoid, and how to negotiate',
    category: 'Buying Guides',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/arc-buyfurniture/600/400',
    heroImage: 'https://picsum.photos/seed/arc-buyfurniture-hero/1400/700',
    tags: ['buying guide', 'furniture', 'second hand', 'inspection'],
    relatedProductTags: ['furniture', 'walnut', 'oak', 'organizer'],
    sections: [
      {
        type: 'lead',
        text: 'A well-made piece of furniture can outlast several generations of owners. A poorly made piece, however attractively presented, will reveal its nature within a few years of daily use. Knowing the difference — quickly and reliably — is the most valuable skill you can develop as a buyer of second hand furniture.',
      },
      {
        type: 'h2',
        text: 'The Structural Inspection',
      },
      {
        type: 'p',
        text: 'Before you look at surface condition, check structure. On a chair, apply weight to each leg individually — any flex or wobble indicates loose joints, which can be repaired but should be reflected in price. On case furniture (chests, cabinets, sideboards), open every door and drawer: they should move smoothly and close flush. Drawers should be solid wood with dovetail joints visible at the corners. Pull a drawer out fully and look at the bottom: solid wood or quality plywood is good; thin hardboard stapled to the base is a sign of cost-cutting.',
      },
      {
        type: 'h2',
        text: 'Surface and Finish',
      },
      {
        type: 'p',
        text: 'Most vintage furniture has been refinished at some point. This is not necessarily a problem, but it affects value and character. An original oil or wax finish that has been maintained has a warmth and depth that a modern lacquer cannot replicate. To identify an original finish, look at the end grain at the back of a leg or on an interior surface — it will show the same colour and treatment as the exterior on original pieces. Lacquered or painted pieces that show their age through wear at high points have developed a patina that adds value; pieces that have been sanded back and heavily refinished have lost part of their history.',
      },
      {
        type: 'pullquote',
        text: 'The single most useful thing you can bring to a furniture inspection is a torch. Light the surfaces at a low angle and you will see every dent, repair, and refinish that a frontal overhead light conceals.',
      },
      {
        type: 'h2',
        text: 'Red Flags',
      },
      {
        type: 'list',
        items: [
          'Veneer lifting at corners or edges — expensive to repair and difficult to match',
          'Woodworm holes (small, round) in frame members — check that it is inactive',
          'Replaced hardware that does not match the period of the piece',
          'Fresh paint or stain over a piece described as original — ask what is underneath',
          'Musty smell — indicates past damp storage, which causes warping and mould',
          'Legs that have been cut down — measure against the type to verify proportions',
        ],
      },
      {
        type: 'h2',
        text: 'Negotiating',
      },
      {
        type: 'p',
        text: 'Second hand furniture prices are rarely fixed the way retail prices are. Issues you have identified in your inspection — a wobbly leg, lifting veneer, a replaced handle — are legitimate grounds for negotiation. Be specific rather than general: "I noticed one of the back legs has some movement in the joint" is more effective than "it\'s a bit worn." Sellers who know their stock will respect a buyer who has looked carefully.',
      },
    ],
  },

  {
    id: 'buy-clothing',
    title: 'The Vintage Clothing Edit',
    subtitle: 'How to assess fabric quality, check condition, and identify pieces worth buying from those worth leaving',
    category: 'Buying Guides',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/arc-clothing/600/400',
    heroImage: 'https://picsum.photos/seed/arc-clothing-hero/1400/700',
    tags: ['buying guide', 'clothing', 'vintage', 'fabric', 'second hand'],
    relatedProductTags: ['linen', 'wool', 'merino', 'throw', 'pillow'],
    sections: [
      {
        type: 'lead',
        text: 'The vintage clothing market is large and often poorly signposted. The same price can be asked for a piece of genuine quality and for a piece that has reached the end of its useful life. Developing a reliable inspection method makes the difference between building a wardrobe that improves with time and accumulating things that must eventually be discarded.',
      },
      {
        type: 'h2',
        text: 'Reading Fabric',
      },
      {
        type: 'p',
        text: 'Natural fibres — wool, linen, silk, cotton — age differently from synthetics, and they age better. Hold the fabric to light: a quality wool will have a slight translucency and an almost fuzzy depth; a cheap synthetic will appear flat and even. Scrunch a section of the fabric in your hand and release it: quality wovens spring back; lower quality materials hold the crease. On knitwear, look for pilling. Light pilling on merino or cashmere is acceptable and can be removed; heavy pilling indicates a garment worn hard that will continue to pill. Check the seams: a quality garment will have finished seams on the inside. Raw, unfinished seams indicate lower quality construction.',
      },
      {
        type: 'pullquote',
        text: 'The best vintage clothing is often the most expensive — because it was made well enough to survive decades of use and still be worth buying. Cheap vintage is usually cheap for a reason.',
      },
      {
        type: 'h2',
        text: 'What to Check',
      },
      {
        type: 'list',
        items: [
          'Under-arm and collar areas on shirts and knitwear — these show wear first',
          'Trouser seat and inner thigh — high-friction areas that thin before tearing',
          'Jacket lining around armholes — tears here are expensive to repair well',
          'Buttonholes for fraying — impossible to repair invisibly',
          'Zips: original YKK or Talon brass zips are a quality indicator',
        ],
      },
    ],
  },

  {
    id: 'buy-books',
    title: 'Collecting Design Books',
    subtitle: 'Condition grading, what makes a copy valuable, and how to build a reference library worth having',
    category: 'Buying Guides',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/arc-books/600/400',
    heroImage: 'https://picsum.photos/seed/arc-books-hero/1400/700',
    tags: ['buying guide', 'books', 'collecting', 'design', 'second hand'],
    relatedProductTags: ['book', 'journal', 'stationery'],
    sections: [
      {
        type: 'lead',
        text: 'A first edition of a major design monograph is not just a book — it is a document of how a designer\'s work was understood at a specific moment in time. The reproductions in early printings were made with greater care than many later editions; the essays were often written by people who knew the subject personally. Collecting design books is collecting design history.',
      },
      {
        type: 'h2',
        text: 'Condition Grading',
      },
      {
        type: 'p',
        text: 'The book trade uses a standard vocabulary for condition. Fine or As New describes a book that appears unread; Very Good allows minor signs of wear; Good means the book has been read but is complete and intact; Fair covers significant wear with no missing pages; Poor is a reading copy only. For valuable books, the dust jacket condition is often as important as the book itself — a price-clipped or torn jacket can significantly reduce value. Missing dust jackets on books published from the 1960s onward, when they became standard, represent a notable loss.',
      },
      {
        type: 'h2',
        text: 'What to Look For',
      },
      {
        type: 'p',
        text: 'The most collectible design books are first editions of monographs published in small print runs, out-of-print catalogues raisonnés, and exhibition catalogues from significant shows. Taschen\'s Art Edition and limited editions carry value from scarcity. Phaidon\'s early architecture and design titles from the 1990s are increasingly collected for their production quality. Any book with an original essay by the designer, or with original plates or print inserts, is worth examining carefully.',
      },
      {
        type: 'tip',
        title: 'Check the Plates',
        text: 'In older art and design books, colour plates were often tipped in separately. Verify that all plates are present — a missing plate in a catalogue raisonné significantly diminishes the book\'s value and usefulness.',
      },
    ],
  },

  // ── CARE & RESTORATION ───────────────────────────────────────────────────────
  {
    id: 'care-leather',
    title: 'Leather Care Handbook',
    subtitle: 'Cleaning, conditioning, storage, and the art of maintaining vintage leather over the long term',
    category: 'Care & Restoration',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/arc-leathercare/600/400',
    heroImage: 'https://picsum.photos/seed/arc-leathercare-hero/1400/700',
    tags: ['leather', 'care', 'maintenance', 'restoration'],
    relatedProductTags: ['leather', 'journal'],
    sections: [
      {
        type: 'lead',
        text: 'Leather responds directly to the care it receives. Neglected leather dries, cracks, and fades; properly maintained leather darkens, softens, and develops a surface that is impossible to replicate with new material. The maintenance required is minimal — a few hours a year — but the sequence matters.',
      },
      {
        type: 'h2',
        text: 'Cleaning',
      },
      {
        type: 'p',
        text: 'Before any conditioning, remove surface dust and grime. Use a barely damp cloth — not wet — to wipe the surface gently, working in the direction of the grain. For heavier soiling on furniture, a small amount of pure castile soap diluted in water (one part soap to ten parts water) applied with a soft cloth, then wiped clean, is effective and gentle. Avoid commercial leather cleaners with strong solvents, which can strip the finish and the natural oils from the hide. Never use silicone-based products, which create a short-term shine but prevent the leather from breathing and eventually cause cracking.',
      },
      {
        type: 'h2',
        text: 'Conditioning',
      },
      {
        type: 'p',
        text: 'Once clean and dry, apply a leather conditioner. The best options are beeswax-based products, lanolin, or pure neatsfoot oil for furniture leather. Apply with a clean soft cloth, working in small circles, and allow the product to absorb for at least 30 minutes before buffing off the excess. The leather should darken slightly as it absorbs the conditioner; this is normal and will even out as it dries.',
      },
      {
        type: 'pullquote',
        text: 'The most common mistake with vintage leather is over-conditioning — applying too much product too frequently. The leather cannot absorb the excess, which sits on the surface and attracts dirt. Once or twice a year is enough.',
      },
      {
        type: 'h2',
        text: 'Storage and Environment',
      },
      {
        type: 'p',
        text: 'Leather should be stored away from direct sunlight, which fades and dries the hide unevenly. It needs airflow — do not store leather goods in plastic bags or airtight containers, as trapped moisture causes mould. Stuffing bags lightly with acid-free tissue paper when storing maintains their shape. For leather furniture, avoid placing pieces in front of radiators or air vents: the dry heat is extremely damaging.',
      },
    ],
  },

  {
    id: 'care-wood',
    title: 'Restoring Wood Furniture',
    subtitle: 'Addressing scratches, water rings, loose joints, and dull finishes — what you can do at home and when to call a professional',
    category: 'Care & Restoration',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/arc-woodcare/600/400',
    heroImage: 'https://picsum.photos/seed/arc-woodcare-hero/1400/700',
    tags: ['wood', 'furniture', 'restoration', 'care', 'maintenance'],
    relatedProductTags: ['walnut', 'oak', 'cutting board', 'organizer'],
    sections: [
      {
        type: 'lead',
        text: 'Most wood furniture problems are less serious than they appear. Water rings, minor scratches, and a dull finish can almost always be addressed at home with patience and the right materials. The key is working with the wood rather than against it — understanding what the finish is before trying to improve it.',
      },
      {
        type: 'h2',
        text: 'Identifying the Finish',
      },
      {
        type: 'p',
        text: 'Wood furniture is finished in several ways, and the treatment differs for each. Oil and wax finishes penetrate the wood and sit within the grain; lacquer and varnish sit on top of the surface as a film. The test: apply a small drop of linseed oil to an inconspicuous area and wait 30 seconds. If it absorbs, the piece has an oil or wax finish. If it beads, the finish is a film of lacquer or varnish. Oil-finished pieces can be revived by cleaning and re-oiling; lacquered pieces with significant damage are best left to a professional.',
      },
      {
        type: 'h2',
        text: 'Water Rings',
      },
      {
        type: 'p',
        text: 'White water rings are surface marks in the finish, not in the wood. On wax or oil-finished surfaces, they can often be removed by rubbing gently with extra-fine steel wool (0000 grade) in the direction of the grain, then re-waxing. For lacquered surfaces, a small amount of mayonnaise left on the ring overnight can raise the moisture out of the finish; wipe clean and buff. Darker rings — brown or black — have penetrated below the finish into the wood itself, and usually require professional treatment or acceptance as part of the piece\'s history.',
      },
      {
        type: 'pullquote',
        text: 'Before doing anything to a piece of furniture, ask what you are actually trying to achieve. Sometimes the right answer is to leave it alone. A mark that tells a story is different from a mark that makes the piece uncomfortable to look at.',
      },
      {
        type: 'h2',
        text: 'When to Call a Professional',
      },
      {
        type: 'list',
        items: [
          'Veneer that is lifting — requires specialised adhesives and clamping techniques',
          'Broken or missing joints on chairs or tables — structural repairs need proper equipment',
          'Significant colour variation that needs blending across a surface',
          'Insect damage that has gone beyond the surface',
          'Marquetry or inlay that is damaged or missing',
          'Any piece of significant value — the cost of professional restoration is almost always recovered in the quality of the result',
        ],
      },
    ],
  },

];
