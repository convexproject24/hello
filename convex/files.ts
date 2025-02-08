<<<<<<< HEAD
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
=======
import { v } from "convex/values";
import { mutation } from "./_generated/server";
>>>>>>> 26e37cf7fd165f0536354a9ed1cb98e4ed1e250e


export const createFile = mutation({
    args: {
        name: v.string(),
    },
    async handler(ctx, args){
<<<<<<< HEAD
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError("You must be logged in to uploead a file");
        }

        
=======
>>>>>>> 26e37cf7fd165f0536354a9ed1cb98e4ed1e250e
        await ctx.db.insert("files", {
            name: args.name,
        });
    },
<<<<<<< HEAD
});

export const getFiles = query({
    args: {},
    async handler(ctx, args){

        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            return[];
        }
        
        return ctx.db.query("files").collect();
    },
=======
>>>>>>> 26e37cf7fd165f0536354a9ed1cb98e4ed1e250e
});