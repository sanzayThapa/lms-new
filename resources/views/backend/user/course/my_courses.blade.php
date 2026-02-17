@extends('backend.user.master')

@section('content')
    <div class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
        <div class="media media-card align-items-center">
            <div class="media-img media--img media-img-md rounded-full">
                <img class="rounded-full"
                    src="{{ auth()->user()->photo ? asset(auth()->user()->photo) : asset('frontend/images/small-avatar-1.jpg')}}"
                    alt="Student image">
            </div>
            <div class="media-body">
                <h2 class="section__title fs-30">My Courses</h2>
            </div>
        </div>
    </div>

    <div class="row">
        @foreach ($latestOrders as $order)
            <div class="col-lg-4 responsive-column-half">
                <div class="card card-item">
                    <div class="card-image">
                        <a href="{{ route('user.course.view', $order->course->id) }}" class="d-block">
                            <img class="card-img-top" src="{{ asset($order->course->course_image) }}" alt="Course image">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><a
                                href="{{ route('user.course.view', $order->course->id) }}">{{ $order->course->course_name }}</a>
                        </h5>
                        <p class="card-text lh-22 pt-2"><a href="#">{{ $order->course->user->name }}</a></p>
                        <div class="rating-wrap d-flex align-items-center py-2">
                            <div class="review-stars">
                                <span class="la la-star"></span>
                                <span class="la la-star"></span>
                                <span class="la la-star"></span>
                                <span class="la la-star"></span>
                                <span class="la la-star"></span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="{{ route('user.course.view', $order->course->id) }}"
                                class="btn theme-btn theme-btn-sm">Start
                                Learning</a>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection