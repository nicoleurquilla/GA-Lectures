/* Building an object
------------------------------------- */
const music = {
    currentTrack: 'Just Ken',
    volume: 70, // determine the volume at which the music plays
    70: 'volume level'
}
console.log(music)


/* Accessing values in an object
------------------------------------- */
// bracket notation
console.log(music['currentTrack'])
console.log(music[70])

// dot notation
console.log(music.currentTrack)
console.log(music.volume)


/* Manipulating properties in an object
------------------------------------- */
// change a value
music.volume = 60
console.log(music)

// delete a value
delete music[70]
console.log(music)

// Adding an array to an object
music.myPlaylist = ['Song 1', 'Song 2', 'Song 3']
console.log(music.myPlaylist[0])
delete music.myPlaylist
console.log(music)


/* Object Methods
------------------------------------- */
// Built in method
console.log(Object.entries(music))

// Custom method
// music.mute = function () { music.volume = 0 }
music.mute = () => music.volume = 0
music.mute()
console.log(music)

// Another custom method
music.currentPlaylist = ['Just Ken', 'Song 2', 'Song 3', 'Song 4']
music.trackIdx = 0

music.next = () => {
    music.trackIdx++
    music.currentTrack = music.currentPlaylist[music.trackIdx]
}
music.next()
console.log(music.currentTrack)


/* Nested Data Structures
------------------------------------- */
music.currentPlaylist = [
    {
        title: 'Just Ken',
        artist: { firstName: 'Ryan', lastName: 'Gosling' },
        album: 'Barbie The Album',
        length: '3:43',
    }, {
        title: 'Hey Blondie',
        artist: 'Dominic Fike',
        album: 'Barbie The Album',
        length: '2:21',
    }, {
        title: 'What Was I Made For',
        artist: 'Billie Eilish',
        album: 'Barbie The Album',
        length: '3:42',
    }, {
        title: 'Dance The Night',
        artist: 'Dua Lipa',
        album: 'Barbie The Album',
        length: '2:56',
    }
]
music.next()
console.log(music)

music.currentPlaylist[2].length = '3:54'
console.log(music.currentPlaylist[2])