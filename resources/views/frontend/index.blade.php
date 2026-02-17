@extends('frontend.master')

@section('content')

    {{-- React Application Mount Point with Dynamic Data --}}
    <div id="homepage" data-course-categories="{{ json_encode($course_category) }}"
        data-categories="{{ json_encode($categories) }}">
    </div>

@endsection