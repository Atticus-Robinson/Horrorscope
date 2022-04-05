// $(document).ready(function() {
//     newHoroscope();
// });

var horoscopeList2 = [
    "Much like your friends and family, the universe has grown tired of your crap. Probably a good idea to just sit this one out today and take the L.",
    "You know those days when you feel like the world is against you, but you can stay mentally strong and persevere? Yeah- today isn't one of those days. However, you can still have a useful and eventful day... by walking head-long into traffic.",
    "Sweet luna is passing through your 4th house of connections, so be on the lookout for an unexpected call or text. From a friend, maybe- which would be incredibly unexpected for you.",
    "You have completely struck out with your children, so parenting is clearly not your strong suit. It's an auspicious day to try your hand at pet parenting. But not a real pet.. maybe like a goldfish. The memory of a goldfish is far too short to remember your shortcomings, of which there are plenty.",
    "Nope. Not today. The universe is done making things easy for you. And let's face it- you haven't exactly taken advantage of the easy times. Grab a blanket, some booze, and wrap yourself in a self-hug, as you have no one in your life to hold you.",
    "Your 7th house of passion and intimate associations is scorching! Today is the day to make your move on that special someone. Carpe diem! For real, don't do any of that. You strike out harder than the '52 Pittsburgh Pirates. Intense self-reflection should be your priority for the day; perhaps then you will get some answers. And then share them with the universe so that we all know precisely what's wrong with you.",
    "Disappointment will be yours this week when you realize that the caged bird isn't so much singing as pleading desperately for its life to end. Call in sick. You'll know why. Your next Career: Unknown Graphic Novelist. Something will slip out of your hand and break your foot tomorrow. When you walk a mile in another guy’s pantyhose, you really hope he did his laundry first. Also, you do not have the legs to wear sheer hose. With all that hair poking through, it looks like you lost a fight with a werewolf.",
    "You consider yourself a born leader. Others think you are an idiot. You are vain and cannot tolerate criticism. Your arrogance is disgusting. You are often good at math which explains why You are a pain in the ass. They wouldn't have said it if they didn't mean it. Your lucky number is 11. What we used to call “life’s failures” are now known as “teaching moments."
]
console.log(horoscopeList2)
function newHoroscope() {
    var randomHoroscope = Math.floor(Math.random() * (horoscopeList2.length));
    document.getElementById('horoscopeText').textContent = horoscopeList2[randomHoroscope];
}

newHoroscope()


