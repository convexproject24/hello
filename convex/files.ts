
import { ConvexError,  } from "convex/values";
import {  query } from "./_generated/server";

import { v } from "convex/values";
import { mutation } from "./_generated/server";



export const createFile = mutation({
    args: {
        name: v.string(),
    },
    async handler(ctx, args){

        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError("You must be logged in to uploead a file");
        }

        

        await ctx.db.insert("files", {
            name: args.name,
        });
    },

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

});