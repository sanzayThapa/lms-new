@extends('backend.user.master')

@section('content')
    <style>
        .learning-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .video-area {
            flex: 1;
            min-width: 600px;
            background: #000;
            margin-bottom: 20px;
            position: relative;
            padding-top: 56.25%;
            /* 16:9 Aspect Ratio */
        }

        .video-area iframe,
        .video-area video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .syllabus-area {
            width: 350px;
            margin-left: 20px;
            max-height: 80vh;
            overflow-y: auto;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
        }

        .lecture-item {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
        }

        .lecture-item:hover {
            background: #eee;
        }

        @media (max-width: 991px) {
            .syllabus-area {
                width: 100%;
                margin-left: 0;
            }
        }
    </style>

    <div class="breadcrumb-content mb-4">
        <h2 class="section__title fs-24">Course Player</h2>
    </div>

    <div class="learning-container">
        <div class="video-area" id="video-player-container">
            <!-- Default placeholder or first video -->
            @if($all_lectures->count() > 0)
                @php
                    $firstLecture = $all_lectures->first();
                @endphp
                @if($firstLecture->video_url)
                    <iframe src="{{ str_replace('watch?v=', 'embed/', $firstLecture->video_url) }}" frameborder="0"
                        allowfullscreen></iframe>
                @else
                    <div class="d-flex align-items-center justify-content-center h-100 text-white">
                        <p>No video available for this lecture.</p>
                    </div>
                @endif
            @else
                <div class="d-flex align-items-center justify-content-center h-100 text-white">
                    <p>This course has no lectures yet.</p>
                </div>
            @endif
        </div>

        <div class="syllabus-area shadow-sm">
            <h4 class="mb-3">Course Content</h4>
            <div class="accordion" id="courseAccordion">
                @foreach($course_sections as $index => $section)
                    <div class="card mb-2">
                        <div class="card-header p-0" id="heading{{ $section->id }}">
                            <button class="btn btn-link btn-block text-left p-3 text-dark text-decoration-none font-weight-bold"
                                type="button" data-toggle="collapse" data-target="#collapse{{ $section->id }}"
                                aria-expanded="{{ $index == 0 ? 'true' : 'false' }}">
                                {{ $section->section_title }}
                            </button>
                        </div>

                        <div id="collapse{{ $section->id }}" class="collapse {{ $index == 0 ? 'show' : '' }}"
                            aria-labelledby="heading{{ $section->id }}" data-parent="#courseAccordion">
                            <div class="card-body p-0">
                                <ul class="list-group list-group-flush">
                                    @foreach($section->lecture as $lecture)
                                        <li class="list-group-item lecture-item"
                                            onclick="changeVideo('{{ $lecture->video_url }}', '{{ $lecture->lecture_title }}')">
                                            <i class="la la-play-circle mr-2"></i> {{ $lecture->lecture_title }}
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    @push('scripts')
        <script>
            function changeVideo(url, title) {
                let embedUrl = url.replace('watch?v=', 'embed/');
                document.getElementById('video-player-container').innerHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
            }
        </script>
    @endpush
@endsection