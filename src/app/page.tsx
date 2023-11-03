export default function Home() {
  const classes = [
    {name: 'Anti-Paladin', icon: 'AP', bg:'bg-pink-800', txt: 'text-black'}, 
    {name: 'Archer', icon: 'Ar', bg: 'bg-orange-600', txt: 'text-blue-600'},
    {name: 'Assasin', icon: 'An', bg: 'bg-black', txt: 'text-yellow-400'},
    {name: 'Barbarian', icon: 'Ba', bg: 'bg-white', txt: 'text-blue-600'},
    {name: 'Monk', icon: 'M', bg: 'bg-gray-500', txt: 'text-black'},
    {name: 'Paladin', icon: 'P', bg: 'bg-green-300', txt: 'text-white'},
    {name: 'Scout', icon: 'S', bg: 'bg-green-600', txt: 'text-black'},
    {name: 'Warrior', icon: 'W', bg: 'bg-purple-600', txt: 'text-white'},
    {name: 'Bard', icon: 'Bd', bg: 'bg-blue-600', txt: 'text-yellow-400'},
    {name: 'Druid', icon: 'D', bg: 'bg-amber-950', txt: 'text-white'},
    {name: 'Healer', icon: 'H', bg: 'bg-red-600', txt: 'text-yellow-400'},
    {name: 'Wizard', icon: 'W', bg: 'bg-yellow-400', txt: 'text-white'}
  ];
  return (
  <>
  <h1 className="flex justify-center text-5xl pb-5">Choose a class:</h1>
  <div className="flex justify-center">
    <div className="grid grid-cols-4 gap-5">
      {classes.map((item, index) => (
        <div key={index} className={`p-3 ${item.bg} bg-am rounded-lg ${item.txt} font-extrabold text-center`}>
          {item.icon}
        </div>
      ))}
    </div>
  </div>
  </>)
}

