import * as Tone from 'tone'
import { synths } from '../constants/constants'

class Conductor {
  constructor(now) {
    this.now = now
    this.musicLength = 0
    this.synthOne = new Tone.PolySynth(Tone.FMSynth).toDestination()
    this.synthOne.sync()
    this.synthTwo = new Tone.PolySynth(Tone.AMSynth).toDestination()
    this.synthTwo.sync()
    // this.synth.set({harmonicity:1})
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
    let x = 5
    this.total += this.attackDuration * noteList.length
  }

  collectWord(word) {
    this.words.push(word)
  }

  play() {
    this.now = Tone.now()

    this.notes.forEach((n) => {
      switch (n.synth) {
        case synths.SYNTHONE:
          this.synthOne.triggerAttack(n.notes, this.now + this.musicLength)
          this.synthOne.triggerRelease(n.notes, this.now + this.musicLength + this.releaseDuration)
          break
        case synths.SYNTHTWO:
          this.synthTwo.triggerAttack(n.notes, this.now + this.musicLength)
          this.synthTwo.triggerRelease(n.notes, this.now + this.musicLength + this.releaseDuration)
          break
        default:
          this.synthOne.triggerAttack(n.notes, this.now + this.musicLength)
          this.synthOne.triggerRelease(n.notes, this.now + this.musicLength + this.releaseDuration)
          break
      }
      this.musicLength += this.attackDuration
    })
    Tone.Transport.start()
  }
}

export default Conductor
