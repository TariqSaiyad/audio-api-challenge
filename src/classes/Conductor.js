import * as Tone from 'tone'

class Conductor {
  constructor(now) {
    this.now = now
    this.musicLength = 0
    this.synth = new Tone.PolySynth(Tone.FMSynth).toDestination()
    this.synth.sync()
    // this.synth.set({harmonicity:1})
    this.notes = []
    this.total = 0

    this.attackDuration = 0.5
    this.releaseDuration = 0.7
  }

  collectNote(noteList) {
    noteList.forEach((n) => {
      this.notes.push(n)
    })
    this.total += this.attackDuration * noteList.length
  }

  play() {
    this.now = Tone.now()

    this.notes.forEach((note) => {
      this.synth.triggerAttack(note, this.now + this.musicLength)
      this.synth.triggerRelease(note, this.now + this.musicLength + this.releaseDuration)
      this.musicLength += this.attackDuration
    })
    Tone.Transport.start()
  }
}

export default Conductor
