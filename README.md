# Assessli - Multimedia Processing & AI Tools

A comprehensive collection of tools for video processing, content generation, AI-powered media manipulation, and analytics.

## Project Overview

Assessli is a modular platform containing several specialized applications for creating, processing, and analyzing multimedia content. The platform combines computer vision, natural language processing, AI-powered content generation, and interactive web interfaces to provide a complete suite of tools for content creators and developers.

## Directory Structure

```
Assessli/
├── AudiAI/            # AI-powered audio/video generation toolkit
├── Recusion/
│   ├── shortGen/      # Automated short-form video generator
│   ├── client/        # Web client interface
│   └── AudiAI/        # UI components for AudiAI integration
└── aizoom/            # Object tracking with zoom effect using OpenCV
```

## Module Descriptions

### AudiAI

AudiAI is an AI-powered toolkit for automated video and audio content generation.

#### Key Components:

- **Video Generation (`videogen.ts`)**: Creates videos programmatically using AI
- **Text-to-Speech (`tts.ts`)**: Converts text to natural-sounding speech
- **AI Integration (`ai.ts`)**: Interfaces with various AI models for content generation
- **Image Processing (`image.ts`)**: Handles image manipulation and generation
- **Subtitles Generation (`subtitles.ts`)**: Creates and embeds subtitles in videos

#### Features:

- Multiple video formats including topic videos, quiz videos, and comparison videos
- Integration with multiple TTS providers (ElevenLabs, etc.)
- Server-side rendering and processing
- Client-side UI components
- CLI interface for automation

#### Technical Stack:

- TypeScript/Node.js
- Various AI APIs (OpenAI, Google AI, Anthropic)
- Canvas/WebGL for rendering
- Next.js for UI components

### aizoom

aizoom is a Python-based tool for object tracking with dynamic zoom effects using OpenCV.

#### Key Components:

- **Object Tracking**: Uses CSRT algorithm for reliable object tracking
- **Zoom Effect**: Implements dynamic zoom targeting tracked objects
- **FastAPI Server**: Provides API endpoints for video processing
- **Web Interface**: Simple interface for uploading and processing videos

#### Features:

- Real-time object tracking in videos
- Customizable zoom intensity
- API for integrating with other applications
- Smooth tracking with object persistence

#### Technical Stack:

- Python 3.x
- OpenCV for computer vision
- FastAPI for REST API
- Django for web integration

### shortGen (Video Short Generation)

shortGen is focused on automated generation of short-form videos from longer content.

#### Key Components:

- **Video Processing (`video.py`)**: Core module for video manipulation
- **YouTube Integration (`utils/youtube_uploader.py`)**: Uploads processed videos to YouTube
- **Sentiment Analysis (`utils/sentiment_analysis.py`)**: Analyzes content for emotional impact
- **Scene Detection (`utils/scene_intensity.py`)**: Identifies high-impact scenes

#### Features:

- Automated extraction of engaging clips from longer videos
- Scene detection and intensity ranking
- Sentiment analysis for content optimization
- Direct upload to social platforms

#### Technical Stack:

- Python
- FFmpeg for video processing
- Machine learning models for content analysis

### Client Web Interface:

A React-based web client providing user interfaces for the various tools.

#### Key Components:

- **Dashboard (`src/pages/Dashboard.jsx`)**: Main control panel
- **AudiBuddy (`src/pages/AudiBuddy.jsx`)**: Interface for audio tools
- **Authentication (`src/context/AuthContext.jsx`)**: User management
- **Map Integration (`src/components/Map.jsx`)**: Location-based services

#### Features:

- Responsive design for multiple devices
- User authentication and session management
- Interactive visualizations for analytics
- Map-based location services

#### Technical Stack:

- React
- Tailwind CSS for styling
- Vite for build tooling
- Leaflet for map functionality

## Installation & Setup

### Prerequisites

- Node.js (v16+)
- Python 3.8+
- FFmpeg
- OpenCV

### AudiAI Setup

```bash
cd AudiAI
npm install
cp .env.sample .env  # Configure your API keys
npm run build
```

### aizoom Setup

```bash
cd aizoom
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### shortGen Setup

```bash
cd Recusion/shortGen
pip install -r requirements.txt
# Configure your credentials in cred.json
```

### Client Setup

```bash
cd Recusion/client
npm install
npm run dev
```

## Usage Examples

### Generate AI Video with AudiAI

```bash
cd AudiAI
npm start -- --generate --topic "Artificial Intelligence Trends"
```

### Process Video with Zoom Effect

```
curl -X POST -F "file=@your_video.mp4" http://localhost:8000/process-video/
```

### Generate Short Clips

```python
from shortGen.video import process_video
process_video("input.mp4", duration=60, intensity_threshold=0.7)
```

## Configuration

Most modules use environment variables or configuration files:

- AudiAI: `.env` file for API keys
- shortGen: `cred.json` for authentication
- Client: Environment variables for API endpoints

## Dependencies

See the respective `package.json` and `requirements.txt` files in each module directory for detailed dependencies.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file in each module for details.

## Acknowledgments

- OpenCV community for computer vision algorithms
- React ecosystem for frontend components
- FFmpeg developers for video processing capabilities

```

```
