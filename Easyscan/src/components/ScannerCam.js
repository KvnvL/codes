import React, { Component } from 'react'
import Quagga from 'quagga'

class Scanner extends Component {
    componentDidMount() {
        Quagga.init(
            {
                inputStream: {
                    type: 'LiveStream',
                    constraints: {
                        width: window.visualViewport.width,
                        height: window.visualViewport.height,
                        facingMode: 'environment',
                    },
                },
                locator: {
                    halfSample: false,
                    patchSize: "medium", // x-small, small, medium, large, x-large
                    debug: {
                        showCanvas: false,
                        showPatches: false,
                        showFoundPatches: false,
                        showSkeleton: false,
                        showLabels: false,
                        showPatchLabels: false,
                        showRemainingPatchLabels: false,
                        boxFromPatches: {
                            showTransformed: true,
                            showTransformedBox: true,
                            showBB: true
                        }
                    }
                },
                frequency: 0.1,
                numOfWorkers: navigator.hardwareConcurrency,
                decoder: {
                    multiple: false,
                    readers: ['ean_reader'],
                    debug: {
                        drawBoundingBox: true,
                        showFrequency: true,
                        drawScanline: true,
                        showPattern: true
                    },
                },
                locate: true,
            },
            function (err) {
                if (err) {
                    return console.log(err)
                }
                Quagga.start()
            },
        )
        Quagga.onDetected(this._onDetected)
    }

    componentWillUnmount() {
        Quagga.offDetected(this._onDetected)
    }

    _onDetected = result => {
        this.props.onDetected(result)
    }

    render() {
        const styles = {
            viewport: {
                position: 'absolute',
                left: '0px',
                top: '0px',
                zIndex: '-1',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                minHeight: '100vh',
                maxHeight: '100vh',

                paddingTop: '-90px',
                paddingBottom: '-100px',
                margin: '0 8%'
            },
            videoCamera: {
                minHeight: '100vh',
                maxHeight: '100vh',
            },
            drawingBuffer: {
                position: 'absolute',
                top: '0',
                left: '0',
            }

        }
        return (
            <div>
                <div id="interactive" className="viewport" styles={styles.viewport}>
                    <video style={styles.videoCamera}></video>
                    <canvas style={styles.drawingBuffer}></canvas>
                </div>
            </div>
        )
    }
}

export default Scanner