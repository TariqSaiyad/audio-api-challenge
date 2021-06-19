import * as Tone from 'tone'

class Conductor {
  constructor(now) {
    this.now = now
    this.index = 0
    this.synth = new Tone.PolySynth(Tone.Synth).toDestination()
  }

  play(note) {
    this.synth.triggerAttack(note, this.now + this.index)
    this.synth.triggerRelease(note, this.now + this.index + 1)
    this.index += 0.5
  }
}

export default Conductor
