<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mongo\Company;
use Illuminate\Http\Request;

class CompanyAPI extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /**
     * @OA\Get(
     *      path="/companies",
     *      operationId="TestId",
     *      tags={"Companies"},
     *      summary="Get all companies",
     *      description="Description",
     *      @OA\Response(
     *          response=200,
     *          description="Response Message",
     *       ),
     *     )
     */
    public function index()
    {
        $companies = Company::all();
        return $companies->toJson();
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
