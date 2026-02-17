<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MyCourseController extends Controller
{
    public function myCourses()
    {
        $id = Auth::user()->id;
        $latestOrders = Order::where('user_id', $id)->with('course')->latest()->get();
        return view('backend.user.course.my_courses', compact('latestOrders'));
    }

    public function courseViews($id)
    {
        $course_id = $id;
        $course_sections = CourseSection::where('course_id', $course_id)->with('lecture')->get();
        $all_lectures = CourseLecture::where('course_id', $course_id)->get();

        return view('backend.user.course.course_view', compact('course_sections', 'all_lectures', 'course_id'));
    }
}
