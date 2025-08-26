'use server'

import { supabase } from "@/config/supabase";
import { redirect } from "next/navigation";


// Create Drink
export async function createDrink(formdata: FormData) {
    const title = formdata.get('title') as string;
    const recipe = formdata.get('recipe') as string;
    const rate = formdata.get('rate') as string;

    if (!title && !recipe && !rate) {
        throw new Error('some fields are required!')
    }
    const { status, error } = await supabase.from('drinks').insert({ title, recipe, rate })
    if (status !== 201) {
        if (error instanceof Error) throw new Error(error?.message)
    }
    return redirect('/tests/drinks')
}

// Update Drink
export async function updateDrink(formdata: FormData, id?: number | string) {
    const title = formdata.get('title') as string;
    const recipe = formdata.get('recipe') as string;
    const rate = formdata.get('rate') as string;

    if (!title && !recipe && !rate) {
        throw new Error('some fields are required!')
    }
    const { error, status } = await supabase.from('drinks').update({ title, recipe, rate }).eq('id', id);
    if (status !== 204) {
        if (error instanceof Error) throw new Error(error?.message)
        return
    }
    return redirect('/tests/drinks')
}

// Delete Drink
export async function deleteDrink(formdata: FormData) {
    const id = formdata.get('id') as string;
    // if (!confirm('are you sure')) {
    //     return
    // }
    const { error, status } = await supabase.from('drinks').delete().eq('id', id);
    if (status !== 204) {
        if (error instanceof Error) throw new Error(error?.message)
        return
    }
    return redirect('/tests/drinks')
}
