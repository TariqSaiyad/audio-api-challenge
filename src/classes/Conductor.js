import * as Tone from 'tone'
import { synths } from '../constants/constants'
import drums from './drums.mp3'
class Conductor {
  constructor(now) {
    this.now = now
    this.musicLength = 0
    this.pitch = new Tone.PitchShift(4).toDestination()
    this.synthOne = new Tone.PolySynth(Tone.AMSynth).connect(this.pitch).toDestination()
    this.synthOne.sync()
    this.delay = new Tone.PingPongDelay("4n", 0.2).toDestination();
    this.synthTwo = new Tone.PolySynth(Tone.FMSynth).connect(this.delay).toDestination()
    this.synthTwo.sync()
    this.beat = new Tone.Player('https://tariqsaiyad.github.io/audio-api-challenge/drums.dfea1f52.mp3').toDestination()
    this.notes = []
    this.words = []
    this.total = 0

    this.attackDuration = 0.4
    this.releaseDuration = 0.7
  }

  collectNote(noteList, synth) {
    this.notes.push({
      notes: noteList,
      synth: synth,
    })
    this.total += this.attackDuration * noteList.length
  }

  collectWord(word) {
    this.words.push(word)
  }

  play() {
    this.now = Tone.context.currentTime
    let length = 4

    for (let index = 0; index < this.notes.length; index++) {
      const n = this.notes[index];
      length = this.notes.length-1==index ? 4:0
      console.log(length);
      switch (n.synth) {
        case synths.SYNTHONE:
          this.synthOne.triggerAttack(n.notes, this.now + this.musicLength+length)
          this.synthOne.triggerRelease(n.notes, this.now + this.musicLength + this.releaseDuration+length)
          break
        case synths.SYNTHTWO:
          this.synthTwo.triggerAttack(n.notes, this.now + this.musicLength+length)
          this.synthTwo.triggerRelease(n.notes, this.now + this.musicLength + this.releaseDuration+length)
          break
        default:
          this.synthOne.triggerAttack(n.notes, this.now + this.musicLength+length)
          this.synthOne.triggerRelease(n.notes, this.now + this.musicLength + this.releaseDuration+length)
          break
      }
      this.musicLength += this.attackDuration
    }

    // Tone.Transport.stop(`+${this.musicLength}`)

   
  }
}

export default Conductor
