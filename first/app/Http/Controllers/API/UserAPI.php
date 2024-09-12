<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserAPI extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /**
     * @OA\Get(
     *      path="/users",
     *      tags={"Users"},
     *      summary="this nigga return all users",
     *      description="get all user ",
     *      @OA\Response(
     *          response=200,
     *          description="It fucking succeed",
     *       ),
     *     )
     */
    public function index()
    {
        $users = User::all();
        return $users->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
