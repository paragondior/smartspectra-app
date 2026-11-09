// Local Mock SDK for SmartSpectra Challenge Development
class SmartSpectraMockSDK {
    constructor() {
        this.isStreaming = false;
        this.listeners = {};
    }

    startStream(callback) {
        this.isStreaming = true;
        
        // Simulate real-time biometric telemetry loop (every 2 seconds)
        this.timer = setInterval(() => {
            if (!this.isStreaming) return;

            // Generate realistic telemetry
            // Periodically alternate between "Flow State" and "Slight Fatigue/Stress"
            const timeFactor = Date.now() / 10000;
            const isStressed = Math.sin(timeFactor) > 0.6;

            const telemetry = {
                heartRate: isStressed ? Math.floor(82 + Math.random() * 6) : Math.floor(68 + Math.random() * 5),
                respRate: isStressed ? Math.floor(19 + Math.random() * 3) : Math.floor(13 + Math.random() * 2),
                state: isStressed ? "Fatigue / Strain Detected" : "Deep Code Flow",
                confidence: 0.98,
                privacyVerified: true
            };

            callback(telemetry);
        }, 2000);
    }

    stopStream() {
        this.isStreaming = false;
        if (this.timer) clearInterval(this.timer);
    }
}

module.exports = { SmartSpectraSDK: SmartSpectraMockSDK };