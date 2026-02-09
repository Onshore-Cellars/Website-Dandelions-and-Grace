import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Link from 'next/link';

// This would typically come from a CMS or database
const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    images?: string[];
  }
> = {
  'summer-wedding-provencal-bastide': {
    title: 'Capturing the magic of a summer wedding in a Provencal bastide',
    excerpt:
      'Natural and quietly elegant florals for a stunning garden wedding in Provence',
    content: `
      <p>There's something truly magical about a summer wedding in Provence. The warm golden light, the scent of lavender on the breeze, and the timeless beauty of a historic bastide create the perfect setting for celebrating love.</p>

      <p>For this enchanting wedding, we created natural, garden-inspired arrangements that complemented the stunning architecture and lush grounds. Soft whites, gentle creams, and touches of sage green formed the color palette, with an abundance of seasonal blooms including garden roses, peonies, and delicate sweet peas.</p>

      <h2>The Ceremony</h2>
      <p>The ceremony took place in the bastide's formal garden, framed by centuries-old stone walls and manicured hedges. We created an organic arch featuring locally sourced greenery and ethereal white blooms that swayed gently in the summer breeze.</p>

      <h2>The Reception</h2>
      <p>For the reception, long harvest tables were dressed with abundant centerpieces mixing high and low arrangements to create visual interest and encourage conversation. Each piece told a story of the Provençal landscape, incorporating elements from the surrounding countryside.</p>

      <p>The bride's bouquet was a work of art – a lush, romantic gathering of the finest blooms, tied with hand-dyed silk ribbon. It perfectly captured the essence of the day: natural, elegant, and utterly timeless.</p>
    `,
    date: '2026-01-08',
    category: 'Real Weddings',
  },
  'timeless-wedding-south-france': {
    title: 'A timeless Wedding in the south of France',
    excerpt:
      'In the quaint Village of Mougins, nestled in the sun drenched gardens of the Manoir de l\'Etang a love story unfolded...',
    content: `
      <p>Nestled in the charming village of Mougins, the Manoir de l'Etang provided the most exquisite backdrop for this timeless celebration. The historic manor, with its sun-drenched gardens and elegant interiors, created an atmosphere of refined romance.</p>

      <h2>The Vision</h2>
      <p>Our couple wanted a classic, sophisticated aesthetic that would stand the test of time. We worked closely with them to create a floral design rooted in traditional elegance while incorporating modern touches that felt fresh and current.</p>

      <p>The color palette was soft and romantic – blush, ivory, champagne, and the palest of pinks, accented with garden greenery and flowing vines.</p>

      <h2>Ceremony Design</h2>
      <p>The ceremony took place in the manor's formal garden, where we created a stunning floral installation that framed the couple against the beautiful French countryside. Lush arrangements of roses, peonies, and hydrangeas in varying heights created a romantic garden atmosphere.</p>

      <h2>Reception Details</h2>
      <p>For the reception, we transformed the manor's elegant spaces with sophisticated centerpieces that mixed garden roses with seasonal French blooms. Candlelight added warmth and romance as the sun set over the Provençal hills.</p>

      <p>This wedding perfectly embodied the magic of celebrating love in the South of France – timeless, elegant, and utterly unforgettable.</p>
    `,
    date: '2024-01-26',
    category: 'Real Weddings',
  },
  'chateau-de-tourreau': {
    title: 'Intimate wedding in stunning Chateau de Tourreau',
    excerpt:
      'Intimate destination weddings with your nearest and dearest don\'t get more beautiful than this.',
    content: `
      <p>Located in the heart of Provence, Chateau de Tourreau is the epitome of French elegance and history. For this intimate wedding, we had the pleasure of creating abundant spring floral designs that complemented the château's breathtaking architecture and gardens.</p>

      <h2>Spring's Finest</h2>
      <p>Timing this wedding for peak spring season meant we had access to the most beautiful blooms. We filled the château with arrangements featuring tulips, ranunculus, sweet peas, and the most spectacular peonies, all sourced from local French growers.</p>

      <h2>The Ceremony Setting</h2>
      <p>The ceremony took place in the château's chapel, where we created installations that honored the sacred space while adding romantic spring florals. Garlands of greenery and flowers adorned the ancient stone walls, and a lush ground installation created a floral path for the bride.</p>

      <h2>Intimate Reception</h2>
      <p>With just their closest family and friends in attendance, the couple celebrated in the château's elegant dining room. We created generous centerpieces that encouraged conversation across the table while allowing guests to connect.</p>

      <p>The outdoor terrace was transformed into a cocktail area with arrangements in stone urns, connecting the formal indoor spaces with the natural beauty of the Provençal countryside.</p>

      <p>This intimate celebration proved that sometimes the most meaningful weddings are those shared with just your nearest and dearest, in a setting as spectacular as Chateau de Tourreau.</p>
    `,
    date: '2023-11-10',
    category: 'Real Weddings',
  },
  'provencal-chapel-elopement': {
    title: 'Romantic elopement in a beautiful Provençal chapel',
    excerpt:
      'An intimate elopement in a stunning Provençal chapel with soft pale yellows and whites.',
    content: `
      <p>Some love stories are told in whispers, celebrated intimately with just the two souls who matter most. This enchanting elopement took place in a centuries-old Provençal chapel, where stone walls and sacred history provided the perfect sanctuary for an intimate vow exchange.</p>

      <h2>A Delicate Palette</h2>
      <p>For this romantic elopement, we chose a palette of soft pale yellows and pristine whites – colors that evoked the gentle morning light filtering through the chapel's ancient windows. The effect was ethereal, peaceful, and profoundly romantic.</p>

      <p>Delicate blooms including white ranunculus, pale yellow garden roses, chamomile, and trailing jasmine created texture and movement while maintaining the soft, dreamy aesthetic the couple envisioned.</p>

      <h2>Chapel Ceremony</h2>
      <p>The chapel needed minimal adornment – its weathered stone and timeless architecture spoke volumes on their own. We created a simple yet stunning ground installation at the altar, a cloud of pale florals that seemed to emerge organically from the ancient floor.</p>

      <p>The bride carried a loose, romantic bouquet that moved naturally as she walked, featuring the softest yellow and white blooms gathered as if freshly picked from a French country garden.</p>

      <h2>The Beauty of Simplicity</h2>
      <p>What made this elopement extraordinary wasn't grandeur or scale, but the profound intimacy and intention behind every detail. In that quiet Provençal chapel, surrounded by blooms that honored both tradition and romance, two people became one.</p>

      <p>It's a reminder that sometimes the most powerful celebrations are the quietest ones – where love speaks louder than any decoration ever could.</p>
    `,
    date: '2023-11-10',
    category: 'Real Weddings',
  },
  'wildflower-provence-farm': {
    title: 'Beautiful wild flower wedding in Provence Farm',
    excerpt:
      'This beautiful farm in the Grasse hills is a perfect venue for an intimate family wedding.',
    content: `
      <p>Nestled in the rolling hills above Grasse, this working farm proved the perfect setting for a celebration that felt both rustic and refined. The couple wanted their wedding to feel organic and uncontrived, as natural as the landscape surrounding them.</p>

      <h2>Wild & Free</h2>
      <p>We embraced a wildflower aesthetic that complemented the farm's natural beauty. Local meadow flowers, garden roses in soft peachy tones, wild grasses, and herbs from the nearby fields created arrangements that felt gathered rather than designed.</p>

      <p>The color palette was inspired by a Provençal sunset – warm apricots, soft corals, butter yellows, and creamy whites, all grounded with abundant greenery and textural elements.</p>

      <h2>Farm-to-Table Setting</h2>
      <p>The reception took place in the farm's restored barn, where long wooden tables were dressed with runners of loose wildflowers, interspersed with vegetables and herbs from the property. Terra cotta pots filled with blooms added rustic charm while maintaining the sophisticated aesthetic.</p>

      <h2>Ceremony in the Meadow</h2>
      <p>The ceremony took place in a wildflower meadow with views stretching across the Provençal countryside. Rather than a traditional arch, we created a simple installation using weathered farm gates adorned with loose, organic arrangements.</p>

      <p>This wedding proved that the most memorable celebrations honor their surroundings rather than competing with them. In this case, the beauty of the Provence farm spoke for itself – we simply highlighted what was already there.</p>
    `,
    date: '2023-06-27',
    category: 'Real Weddings',
  },
  'bright-elopement': {
    title: 'All things bright and beautiful',
    excerpt: 'Bold and bright florals for this stunning elopement',
    content: `
      <p>Not every Provençal wedding calls for soft, muted tones. This vibrant elopement celebrated color, joy, and the sheer exuberance of love with a bold floral palette that demanded attention and delivered drama.</p>

      <h2>Embracing Color</h2>
      <p>We pulled out all the stops with a rainbow palette featuring fuchsia, coral, orange, hot pink, and touches of golden yellow. This wasn't about restraint – it was about celebration in its most joyful, uninhibited form.</p>

      <p>Ranunculus, anemones, dahlias, roses, and tulips in the most saturated colors we could source created arrangements that were pure happiness. Each bloom seemed to vibrate with energy and life.</p>

      <h2>Location & Styling</h2>
      <p>Set against the neutral stone of a private villa, the bright florals created a striking contrast. We designed installations that were architectural yet organic, structured yet flowing – a balance between control and wild abandon.</p>

      <p>The bride's bouquet was a masterpiece of color and texture, a gathered cloud of the most vibrant blooms that somehow worked in perfect harmony. It was bold, confident, and utterly unforgettable.</p>

      <h2>Breaking the Rules</h2>
      <p>This elopement reminded us that there are no rules in wedding design – only possibilities. If you want bright, bold, and beautiful, embrace it fully. The result is a celebration that's authentically you, and that's what matters most.</p>
    `,
    date: '2022-11-22',
    category: 'Real Weddings',
  },
  'autumnal-chateau-robernier': {
    title: 'Autumnal Wedding at Chateau Robernier',
    excerpt:
      'This stunning wedding shows how beautiful an autumnal date can be in Provence.',
    content: `
      <p>While summer claims the spotlight for Provence weddings, autumn offers something equally magical – the warmth of golden light, the richness of harvest season, and a landscape painted in amber and gold. This wedding at Chateau Robernier celebrated autumn in all its glory.</p>

      <h2>Autumn's Palette</h2>
      <p>We worked with nature's own autumn palette: burnt orange, deep burgundy, rust, golden yellow, and rich terracotta, accented with unexpected touches of deep plum and soft grey-green foliage.</p>

      <p>Dahlias at their peak, garden roses in autumn tones, seasonal branches with turning leaves, and seed pods added textural interest while celebrating the season's abundant harvest.</p>

      <h2>The Setting</h2>
      <p>Chateau Robernier, with its weathered stone and romantic ruins, couldn't be more perfect for an autumn celebration. We enhanced rather than overwhelmed the setting, using the château's architecture as a canvas for our floral work.</p>

      <h2>Ceremony & Reception</h2>
      <p>The ceremony arch featured dramatic branches adorned with autumn blooms, creating a frame that celebrated the season while maintaining elegant restraint. For the reception, we designed organic centerpieces with varied heights, incorporating seasonal elements like pears, pomegranates, and autumn foliage.</p>

      <p>As the sun set early over the Provençal hills, hundreds of candles came to life, creating a warm glow that highlighted the rich autumn tones and transformed the château into pure magic.</p>

      <p>This wedding proved that autumn in Provence rivals any season – perhaps even surpasses them – in beauty and romance.</p>
    `,
    date: '2022-11-22',
    category: 'Real Weddings',
  },
  'aix-bastide-wedding': {
    title: 'Chic bastide wedding near Aix en Provence',
    excerpt: 'Provençal charm for the perfect wedding weekend',
    content: `
      <p>Just outside the elegant city of Aix-en-Provence, this chic bastide provided the ideal setting for a wedding weekend that perfectly balanced sophistication with Provençal charm. The couple wanted a celebration that felt effortlessly elegant – refined without being fussy.</p>

      <h2>Sophisticated Simplicity</h2>
      <p>The floral design leaned into a palette of whites, creams, and soft greens with occasional touches of the palest blush. We focused on texture and variety of blooms rather than bold color, creating interest through contrast of forms and foliage.</p>

      <p>White peonies, garden roses, ranunculus, and sweet peas mixed with structural elements like eucalyptus, olive branches, and seasonal greenery created arrangements that felt lush yet refined.</p>

      <h2>Weekend Celebration</h2>
      <p>With guests arriving for a full weekend, we created floral moments throughout the bastide's grounds. The welcome dinner featured simple yet elegant arrangements in the bastide's courtyard, using local urns and containers that honored the property's history.</p>

      <h2>The Wedding Day</h2>
      <p>The ceremony took place under the bastide's ancient plane trees, where we created a suspended installation of greenery and white blooms that seemed to float in the dappled sunlight. It was ethereal, romantic, and utterly captivating.</p>

      <p>For the reception, long tables dressed with linen runners featured low, abundant arrangements that allowed conversation to flow while creating visual luxury. As evening descended, the candlelit tables glowed with warmth.</p>

      <p>This was Provençal elegance at its finest – understated, graceful, and impossibly chic.</p>
    `,
    date: '2022-11-22',
    category: 'Real Weddings',
  },
  'provence-chateau-wedding': {
    title: 'Stunning chateau wedding in Provence',
    excerpt:
      'A hidden gem nestled in the Provence vineyards and close to the French Riviera.',
    content: `
      <p>Tucked away in the countryside between Provence and the French Riviera, this hidden château provided a fairytale setting for a wedding that perfectly balanced grandeur with intimacy. Surrounded by vineyards and lavender fields, the château felt like a secret discovered – which made the celebration all the more special.</p>

      <h2>Classic Romance</h2>
      <p>For this château wedding, we embraced classic romance with a timeless palette. Soft ivory, champagne, hints of blush pink, and abundant greenery created arrangements that felt both traditional and fresh.</p>

      <p>We sourced the finest French-grown blooms: garden roses, peonies at their absolute peak, delicate sweet peas, and ranunculus, combined with structural foliage and dramatic branches to create scale appropriate for the château's grand spaces.</p>

      <h2>Ceremony in the Gardens</h2>
      <p>The ceremony took place in the château's formal gardens, with the historic building as backdrop. We created a statement floral installation at the altar – a lush arch of blooms and greenery that framed the couple against the stunning architecture.</p>

      <p>Petals scattered along the aisle and arrangements marking each row created a romantic path for the bride's entrance.</p>

      <h2>Grand Reception</h2>
      <p>The reception filled the château's grand salon and spilled onto the terrace overlooking the vineyards. We designed varied centerpieces – some low and lush, others tall and dramatic – to create visual interest while maintaining the sophisticated aesthetic.</p>

      <p>As the Provençal sun set, painting the sky in shades of rose and gold, the celebration continued under the stars. It was a wedding worthy of its remarkable setting.</p>
    `,
    date: '2022-11-22',
    category: 'Real Weddings',
  },
  'grasse-perfume-fields-elopement': {
    title: 'Intimate elopement above the perfume fields of Grasse',
    excerpt: 'Garden style elopement in the South of France',
    content: `
      <p>High in the hills above Grasse, the perfume capital of the world, this intimate elopement celebrated the region's fragrant heritage. With fields of jasmine, roses, and tuberose stretching below, the setting couldn't have been more perfectly Provençal.</p>

      <h2>Scented Celebration</h2>
      <p>We designed the florals to honor Grasse's perfume tradition, focusing on the most fragrant blooms. Garden roses, jasmine, tuberose, lavender, and sweet peas created arrangements that were as captivating to the nose as to the eye.</p>

      <p>The palette was soft and romantic – whites, creams, and the palest lavenders, with touches of sage green from local herbs and foliage.</p>

      <h2>Garden-Style Design</h2>
      <p>The elopement took place in a private garden overlooking the perfume fields. We created loose, organic arrangements that felt gathered from the surrounding landscape rather than formally designed.</p>

      <p>The bride's bouquet was a particular highlight – a gathered armful of the most fragrant blooms, tied casually with silk ribbon. Simple, romantic, and deeply personal, it embodied the intimate nature of the celebration.</p>

      <h2>Intimate Details</h2>
      <p>For the small reception following the ceremony, we dressed a single table under an ancient olive tree with a garland of flowers and herbs that ran the table's length. Surrounded by the scent of jasmine on the evening air, the couple shared their first meal as married partners.</p>

      <p>This elopement reminded us that luxury isn't about scale – it's about intention, beauty, and creating moments that resonate deeply. In the hills above Grasse, magic happened in its simplest, most profound form.</p>
    `,
    date: '2022-11-22',
    category: 'Real Weddings',
  },
  'luberon-provence-wedding': {
    title: 'Relaxed Provence wedding in the beautiful Luberon',
    excerpt:
      'This beautiful wedding was set at a stunning family home in Bonnieux.',
    content: `
      <p>In the heart of the Luberon, one of Provence's most picturesque regions, this wedding took place at a family home in the village of Bonnieux. Perched on a hillside with sweeping views of the valley below, the setting was breathtakingly beautiful in its simplicity.</p>

      <h2>Relaxed Elegance</h2>
      <p>The couple wanted their celebration to feel like an elevated garden party – elegant but not formal, beautiful but not precious. We created florals that matched this relaxed yet refined sensibility.</p>

      <p>Working with a soft palette of whites, creams, soft peach, and abundant greenery, we designed arrangements that felt organic and uncontrived. Local blooms mixed with garden roses, seasonal flowers, and herbs from the property's own gardens.</p>

      <h2>Ceremony with a View</h2>
      <p>The ceremony took place on the home's terrace, with the Luberon Valley as backdrop – a view that required no competing focal point. We kept the ceremony arrangements simple and organic, using local urns filled with loose, natural arrangements.</p>

      <p>The bride walked through the home's gardens to reach her groom, a processional that felt intimate and personal rather than formal.</p>

      <h2>Al Fresco Reception</h2>
      <p>Dinner was served at long tables under the stars, dressed with loose garlands of flowers and herbs. Mismatched vintage candlesticks of varying heights created warm, flickering light as the sun set.</p>

      <p>The overall effect was one of effortless beauty – as if the celebration had organically emerged from the landscape itself. It was Provence at its most authentic and charming.</p>

      <p>This wedding proved that the most relaxed celebrations can also be the most memorable. When you're surrounded by beauty – natural and created – and the people you love most, nothing else matters.</p>
    `,
    date: '2022-01-13',
    category: 'Real Weddings',
  },
  'monaco-elopement': {
    title: 'A Spectacular Monaco Elopement',
    excerpt:
      'As Featured on Wedding Sparrow - intimate wedding ceremonies in Monaco.',
    content: `
      <p>Monaco – a place of legendary glamour and sophisticated elegance – provided the stunning backdrop for this intimate elopement. Featured on Wedding Sparrow, this celebration captured the principality's essence while maintaining the personal, meaningful nature of an elopement.</p>

      <h2>Monaco Glamour</h2>
      <p>We designed florals worthy of Monaco's luxurious reputation while ensuring they felt appropriate for an intimate celebration. The palette was sophisticated and rich: deep burgundy, blush, ivory, with touches of gold and abundant expensive greenery.</p>

      <p>Premium blooms including the finest garden roses, ranunculus, and seasonal flowers were combined with exotic elements and trailing amaranthus to create arrangements that were undeniably luxurious.</p>

      <h2>Ceremony Perfection</h2>
      <p>The ceremony took place with the Mediterranean as backdrop – Monaco's iconic coastline providing a view that rivaled any floral installation. We created an elegant arrangement at the altar that complemented rather than competed with the spectacular setting.</p>

      <p>The bride's bouquet was a masterclass in luxury floristry: perfectly selected blooms in a sophisticated color palette, expertly arranged, and finished with silk ribbon. It was as Monaco as Monaco gets – glamorous, elegant, flawless.</p>

      <h2>Intimate Celebration</h2>
      <p>What made this elopement special wasn't just the stunning location or luxurious florals – it was the intimacy and intention behind every detail. In one of the world's most glamorous destinations, two people focused entirely on each other and their commitment.</p>

      <p>The celebration continued at one of Monaco's finest restaurants, where a single stunning arrangement graced their private table. It was intimate, it was elegant, and it was absolutely perfect.</p>
    `,
    date: '2022-01-11',
    category: 'Real Weddings',
  },
  'yacht-flower-care-tips': {
    title: 'Top Tips to keep your flowers in tip top condition',
    excerpt:
      'Useful tips to help you care for your flowers on board your yacht!',
    content: `
      <p>Flowers on yachts face unique challenges – the marine environment, sun exposure, and movement of the vessel all affect their longevity. As specialists in yacht floristry on the French Riviera, we've learned exactly how to help blooms stay fresh and beautiful during your time on the water.</p>

      <h2>Before Your Flowers Arrive</h2>
      <p><strong>Prepare Your Spaces:</strong> Ensure areas where flowers will be displayed have some protection from direct sunlight, particularly during the hottest parts of the day. Even sun-loving blooms will wilt quickly under intense Mediterranean sun.</p>

      <p><strong>Check Air Conditioning:</strong> Flowers prefer cooler temperatures. If possible, maintain interior spaces at 18-22°C (64-72°F) for optimal flower longevity.</p>

      <h2>Daily Care Best Practices</h2>
      <p><strong>Water Daily:</strong> Check arrangements every morning and top up water levels. The marine environment can cause faster evaporation, so this is crucial.</p>

      <p><strong>Remove Wilting Blooms:</strong> Take out any flowers that are past their peak. This prevents them from affecting other blooms and keeps arrangements looking fresh.</p>

      <p><strong>Mind the Trim:</strong> Every 2-3 days, trim stems at an angle by about 1cm (0.5 inches) under running water. This helps them continue absorbing water efficiently.</p>

      <h2>Location Considerations</h2>
      <p><strong>Avoid Direct Sun:</strong> Position arrangements away from windows that receive direct afternoon sun. Morning sun is gentler and less damaging.</p>

      <p><strong>Consider Air Flow:</strong> Good air circulation helps, but avoid placing arrangements directly in front of air conditioning vents, which can cause rapid dehydration.</p>

      <p><strong>Secure Your Arrangements:</strong> Ensure vases are stable and won't tip when the yacht is underway. We design arrangements specifically with vessel movement in mind, but it's worth double-checking positioning.</p>

      <h2>What to Watch For</h2>
      <p><strong>Water Quality:</strong> Change water every 2-3 days. If water becomes cloudy or develops an odor, change it immediately and rinse the vase thoroughly.</p>

      <p><strong>Salt Air Effects:</strong> While most flowers handle the marine environment well, some are more sensitive to salt air. If you notice premature wilting, the arrangement may need repositioning away from exterior areas.</p>

      <h2>Making Flowers Last</h2>
      <p><strong>The Right Blooms:</strong> When ordering yacht flowers, communicate with your florist about the marine environment. Some flowers (like orchids, anthuriums, and certain tropical blooms) naturally perform better in yacht conditions.</p>

      <p><strong>Timing Matters:</strong> Consider the length of your charter. For shorter trips (1-3 days), most premium blooms will perform beautifully. For longer charters, plan for mid-charter refreshes to maintain that spectacular look.</p>

      <h2>When to Call Your Florist</h2>
      <p>If you're chartering on the French Riviera and flowers are essential to your experience, many premier florists (including us!) offer mid-charter refresh services. We can replace arrangements or simply swap out tired blooms to keep everything looking perfect throughout your voyage.</p>

      <p>With proper care and attention, your yacht flowers will remain as stunning as the Mediterranean vistas surrounding you. These simple practices ensure your floral designs stay fresh, beautiful, and worthy of your luxury yacht experience.</p>
    `,
    date: '2019-07-02',
    category: 'Tips & Advice',
  },
  'festival-wedding': {
    title: "Alex and Lucy's bold and bright Festival wedding",
    excerpt:
      'Bold wedding florals for close friends - colour palette and garden style blooms.',
    content: `
      <p>When close friends Alex and Lucy decided to marry, they knew they wanted something different from traditional wedding elegance. They wanted bold, bright, joyful – a celebration that felt like the best festival they'd ever attended, with friends, music, and unbridled fun.</p>

      <h2>Festival Vibes</h2>
      <p>We embraced the festival theme wholeheartedly, creating florals that were exuberant, colorful, and full of personality. The palette was fearless: hot pink, tangerine orange, sunshine yellow, electric purple, with pops of fuchsia and coral throughout.</p>

      <p>Wildflowers, dahlias, zinnias, sunflowers, and cosmos created the perfect garden-meets-festival aesthetic. Nothing was too precious or formal – these were arrangements that celebrated joy in its purest form.</p>

      <h2>The Outdoor Celebration</h2>
      <p>The wedding took place in a field on the family's Provence property, with a tent for dining and music. We created floral installations that felt organic and wild: garlands of flowers and greenery adorning tent poles, arrangements in mismatched vintage containers, and even flower crowns for guests who wanted to embrace the festival spirit.</p>

      <h2>Ceremony Circle</h2>
      <p>Rather than a traditional altar, Alex and Lucy exchanged vows surrounded by their friends in a circle. We created low arrangements of wildflowers and bright blooms placed around the circle's perimeter, defining the sacred space without creating barriers.</p>

      <h2>Reception Details</h2>
      <p>Long harvest tables were dressed with runners of eucalyptus and bright flowers. Arrangements in vintage glass bottles and mason jars created a casual, collected-over-time aesthetic. As the sun set and string lights came on, the celebration transformed into pure magic.</p>

      <p>This wedding proved that there's no single right way to celebrate marriage. Alex and Lucy created a day authentic to who they are – bold, bright, and full of joy. The flowers simply amplified their already incredible energy.</p>
    `,
    date: '2019-07-02',
    category: 'Real Weddings',
  },
  'romantic-grasse-wedding': {
    title: 'Romantic Summer wedding in Grasse',
    excerpt:
      'Delicate pastel colours and relaxed garden inspired florals in Grasse.',
    content: `
      <p>In the perfumed hills of Grasse, this romantic summer wedding celebrated the region's beauty with a delicate pastel palette and relaxed garden-inspired florals. It was soft, dreamy, and utterly romantic – a celebration that felt like stepping into an Impressionist painting.</p>

      <h2>Pastel Perfection</h2>
      <p>We designed with the softest pastels imaginable: pale pink, soft lavender, butter yellow, peachy cream, and ivory, all tied together with sage green and gray-green foliage. The effect was gentle, romantic, and timelessly beautiful.</p>

      <p>Garden roses, peonies, sweet peas, ranunculus, and local wildflowers created arrangements that felt freshly gathered rather than formally designed. This was garden floristry at its most romantic and natural.</p>

      <h2>Garden Ceremony</h2>
      <p>The ceremony took place in a private garden with views across the Grasse countryside. We created an organic arch using branches from the property adorned with loose, flowing arrangements in our pastel palette. It framed the couple perfectly while allowing the stunning view to shine.</p>

      <p>The aisle was marked with arrangements in vintage urns, varied in height and style to create visual interest while maintaining the relaxed aesthetic.</p>

      <h2>Summer Evening Reception</h2>
      <p>As evening fell, the reception came alive under the stars. Long tables dressed with loose garlands and low, lush arrangements created an intimate atmosphere. Hundreds of candles in varying heights added warmth and romance as the sun set.</p>

      <p>The bride's bouquet deserved special mention – a masterpiece of pale blooms in varying textures, tied loosely with trailing silk ribbon. It moved naturally as she walked, catching the evening light beautifully.</p>

      <h2>Timeless Romance</h2>
      <p>This wedding captured everything magical about summer in Provence: the gentle evening light, the scent of flowers on the air, the warmth of gathering with loved ones. The florals simply highlighted what was already there – beauty, romance, and pure joy.</p>

      <p>Years from now, this couple will look back at their wedding and remember not just how it looked, but how it felt. And it felt like the most perfect summer evening imaginable, surrounded by beauty and love.</p>
    `,
    date: '2019-07-01',
    category: 'Real Weddings',
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section background="white" className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/journal"
                className="text-sm text-stone-500 hover:text-stone-900 uppercase tracking-widest"
              >
                ← Back to Journal
              </Link>
            </div>

            {/* Category & Date */}
            <div className="mb-6">
              <span className="text-sm text-stone-600 uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-sm text-stone-300 mx-3">·</span>
              <time className="text-sm text-stone-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl mb-8 leading-tight">{post.title}</h1>

            {/* Featured Image Placeholder */}
            <div className="aspect-[16/10] bg-stone-200 mb-12 rounded-sm" />

            {/* Excerpt */}
            <p className="text-xl text-stone-600 mb-12 italic border-l-2 border-stone-300 pl-6">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" className="pt-0">
        <Container>
          <article className="max-w-3xl mx-auto prose prose-lg prose-stone">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </Container>
      </Section>

      {/* Image Gallery Section */}
      <Section background="stone">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-12 text-center">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] bg-stone-300 rounded-sm" />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-12 text-center">More Real Weddings</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-stone-200 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-t from-stone-900/10 to-transparent" />
                  </div>
                  <p className="text-sm text-stone-500 mb-2 uppercase tracking-wider">
                    Real Weddings
                  </p>
                  <h3 className="text-lg hover:text-stone-600 transition-colors cursor-pointer">
                    Related Wedding Title {i + 1}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
