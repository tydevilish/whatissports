
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800/50 text-white p-6 flex justify-between items-center sticky top-0 z-11">
        <div className="flex items-center space-x-3 mx-15">
          <Image
            src="/logo.png"
            alt="Sports World Logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Link href="/about" className="text-gray-500 hover:text-white transition-colors duration-300 font-light text-sm">
            About
          </Link>
        </div>
      </nav>

      {/* Football Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1920px] mx-auto">

          {/* Football Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/football.jpg"
                  alt="Football"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <h2 className="text-5xl font-thin mb-8 text-white tracking-wide">Football: The Beautiful Game</h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Football, known as soccer in some regions, stands as the world's most popular sport. It transcends cultural boundaries and unites billions of fans globally through its elegant simplicity and dramatic intensity.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                From local grassroots matches to prestigious international tournaments like the FIFA World Cup, football captures the imagination of people worldwide, creating moments of collective joy, heartbreak, and unforgettable sporting history.
              </p>
            </div>
          </div>

          {/* Football Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="lg:order-2">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/football-rules.jpg"
                  alt="Football Rules"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="lg:order-1 max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Rules and Regulations</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Football follows a set of standardized rules governed by FIFA. The game consists of two 45-minute halves, with teams of eleven players each striving to score goals while adhering to specific regulations.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Key rules include the offside rule, handball regulations, and various foul classifications. The sport also features unique elements such as yellow and red cards for disciplinary actions, and the advantage rule to maintain game flow.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Modern football has embraced technological advancements with the introduction of VAR (Video Assistant Referee) and goal-line technology to ensure accurate decision-making.
              </p>
            </div>
          </div>

          {/* Football History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/football-history.jpg"
                  alt="Football History"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Rich History and Evolution</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                The modern game of football emerged in England during the 19th century, though various forms of ball games existed across ancient civilizations. The Football Association was established in 1863, marking the standardization of the sport's rules.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Throughout the 20th century, football evolved into a global phenomenon, with the FIFA World Cup becoming the most-watched sporting event. The sport has produced legendary figures like Pelé, Diego Maradona, and Cristiano Ronaldo.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Today, football continues to grow, embracing new technologies and reaching new audiences while maintaining its core appeal as the beautiful game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basketball Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1920px] mx-auto">

          {/* Basketball Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="lg:order-2">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/basketball.jpg"
                  alt="Basketball"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="lg:order-1 max-w-2xl">
              <h2 className="text-5xl font-thin mb-8 text-white tracking-wide">Basketball: Above and Beyond</h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Basketball is a dynamic team sport that combines athleticism, strategy, and skill. It has evolved from a simple peach basket game to one of the world's most popular sports, featuring high-flying action and intense competition.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                The sport has given rise to iconic leagues like the NBA and WNBA, showcasing the highest level of basketball talent and creating a global culture that extends beyond the court.
              </p>
            </div>
          </div>

          {/* Basketball Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/basketball-rules.jpg"
                  alt="Basketball Rules"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Game Rules and Structure</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Basketball games are typically divided into four quarters, with duration varying by league - NBA quarters last 12 minutes, while FIBA games feature 10-minute quarters. The sport combines elements of offense and defense, with teams aiming to score points by shooting the ball through the opponent's hoop.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Key rules include dribbling regulations, traveling violations, and various types of fouls. The three-point line adds an extra strategic element, rewarding long-range shooting skills with additional points.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Modern basketball has implemented instant replay systems and shot clocks to enhance fairness and maintain game pace, while rules continue to evolve to improve player safety and game flow.
              </p>
            </div>
          </div>

          {/* Basketball History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="lg:order-2">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/basketball-history.jpg"
                  alt="Basketball History"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="lg:order-1 max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Historical Journey</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Basketball was invented by Dr. James Naismith in 1891 at the International YMCA Training School (now Springfield College) in Massachusetts. The sport was created as an indoor activity for students during the winter months.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                The sport rapidly gained popularity throughout the 20th century, leading to the formation of professional leagues and its inclusion in the Olympic Games. Legendary players like Michael Jordan, Magic Johnson, and LeBron James have helped transform basketball into a global phenomenon.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Today, basketball continues to innovate and expand, with developments in analytics, training methods, and global competition formats shaping its future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volleyball Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1920px] mx-auto">

          {/* Volleyball Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/volleyball.jpg"
                  alt="Volleyball"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <h2 className="text-5xl font-thin mb-8 text-white tracking-wide">Volleyball: Power and Precision</h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Volleyball is a fast-paced team sport that combines power, agility, and strategic teamwork. Players must coordinate their movements perfectly to keep the ball in play while executing powerful spikes and precise serves.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                From beach volleyball to indoor competitions, the sport has evolved into various formats, each requiring unique skills and strategies. International competitions like the FIVB World Championships showcase the highest level of volleyball talent.
              </p>
            </div>
          </div>

          {/* Volleyball Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="lg:order-2">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/volleyball-rules.jpg"
                  alt="Volleyball Rules"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="lg:order-1 max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Rules and Gameplay</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Volleyball matches are played between two teams of six players each, with the objective of scoring points by grounding the ball on the opponent's court. Each team is allowed three touches to return the ball over the net.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                The game features specific rules about rotation, serving, and ball handling. Points are scored through various means including successful spikes, blocks, and opponent errors.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Modern volleyball incorporates technology like video challenge systems to ensure accurate calls and maintain fair play throughout matches.
              </p>
            </div>
          </div>

          {/* Volleyball History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/volleyball-history.jpg"
                  alt="Volleyball History"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Historical Development</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Volleyball was invented in 1895 by William G. Morgan in Holyoke, Massachusetts. Originally called "Mintonette," the sport was designed as a less intense alternative to basketball for older YMCA members.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                The sport gained international recognition throughout the 20th century, becoming an Olympic sport in 1964. Beach volleyball, a popular variant, was later added to the Olympics in 1996.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Today, volleyball continues to evolve with professional leagues worldwide and growing participation at all levels of competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Badminton Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1920px] mx-auto">

          {/* Badminton Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="lg:order-2">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/badminton.jpg"
                  alt="Badminton"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="lg:order-1 max-w-2xl">
              <h2 className="text-5xl font-thin mb-8 text-white tracking-wide">Badminton: Grace and Speed</h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Badminton is one of the fastest racquet sports in the world, combining lightning-quick reflexes with strategic gameplay. Players must demonstrate exceptional agility and tactical thinking to succeed.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                The sport features both singles and doubles play, each requiring different strategies and skills. Major tournaments like the All England Open and Olympic Games showcase the highest level of badminton excellence.
              </p>
            </div>
          </div>

          {/* Badminton Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/badminton-rules.jpg"
                  alt="Badminton Rules"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Rules and Scoring</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Badminton matches are played using a rally scoring system, with games played to 21 points. Players must win by two clear points, and matches are typically best of three games.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                The sport has specific rules regarding serving, court boundaries, and shuttle contact. Players must serve diagonally across the court and keep the shuttle within the designated playing area.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Modern badminton employs technology like instant replay and line-calling systems in professional tournaments to ensure accurate decisions.
              </p>
            </div>
          </div>

          {/* Badminton History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="lg:order-2">
              <div className="relative w-full h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <Image
                  src="/badminton-history.jpg"
                  alt="Badminton History"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
            <div className="lg:order-1 max-w-2xl">
              <h3 className="text-4xl font-thin mb-8 text-white tracking-wide">Historical Journey</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                Badminton's origins can be traced back to ancient games played in China, Japan, and India. The modern form of the sport developed in British India during the mid-19th century, where it was known as "Poona."
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-6">
                The sport gained popularity in England, leading to the establishment of the first official rules in 1877. Badminton became an Olympic sport in 1992, marking its recognition as a truly global competitive sport.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Today, badminton continues to grow in popularity, particularly in Asia, where countries like China, Indonesia, and Malaysia dominate international competitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="pt-5 pb-30 px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-thin mb-4 text-white tracking-wide">Inspiring Quotes</h2>
          <p className="text-lg text-gray-400 font-light">Words of wisdom from legendary athletes</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex overflow-x-auto space-x-8 pb-8 px-4 snap-x snap-mandatory">
            {/* Football Quote */}
            <div className="flex-none w-96 bg-gray-900/50 rounded-xl p-6 snap-center">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/pele.jpg"
                  alt="Pelé"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-xl font-light text-white">Pelé</h3>
                  <p className="text-sm text-gray-400">Football Legend</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."</p>
            </div>

            {/* Basketball Quote */}
            <div className="flex-none w-96 bg-gray-900/50 rounded-xl p-6 snap-center">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/jordan.jpg"
                  alt="Michael Jordan"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-xl font-light text-white">Michael Jordan</h3>
                  <p className="text-sm text-gray-400">Basketball Icon</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."</p>
            </div>

            {/* Volleyball Quote */}
            <div className="flex-none w-96 bg-gray-900/50 rounded-xl p-6 snap-center">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/misty-may.jpg"
                  alt="Misty May-Treanor"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-xl font-light text-white">Misty May-Treanor</h3>
                  <p className="text-sm text-gray-400">Volleyball Champion</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"It's not about perfect. It's about effort. When you bring that effort every single day, that's where transformation happens. That's how change occurs."</p>
            </div>

            {/* Badminton Quote */}
            <div className="flex-none w-96 bg-gray-900/50 rounded-xl p-6 snap-center">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/lin-dan.jpg"
                  alt="Lin Dan"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-xl font-light text-white">Lin Dan</h3>
                  <p className="text-sm text-gray-400">Badminton Legend</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"The biggest opponent is yourself. Always push beyond your limits."</p>
            </div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-900">
        <div className="max-w-[1920px] mx-auto text-center">
          <p className="text-gray-600 font-light text-sm">© 2024 Jirapat Papai All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}