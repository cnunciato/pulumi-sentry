// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Sentry Project resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Create a project
 * const _default = new sentry.SentryProject("default", {
 *     organization: "my-organization",
 *     platform: "javascript",
 *     resolveAge: 720,
 *     slug: "web-app",
 *     teams: [
 *         "my-first-team",
 *         "my-second-team",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization and team slugs from the URLhttps://sentry.io/settings/[org-slug]/projects/[project-slug]/
 *
 * ```sh
 *  $ pulumi import sentry:index/sentryProject:SentryProject default org-slug/project-slug
 * ```
 */
export class SentryProject extends pulumi.CustomResource {
    /**
     * Get an existing SentryProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryProjectState, opts?: pulumi.CustomResourceOptions): SentryProject {
        return new SentryProject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sentry:index/sentryProject:SentryProject';

    /**
     * Returns true if the given object is an instance of SentryProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SentryProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentryProject.__pulumiType;
    }

    public /*out*/ readonly color!: pulumi.Output<string>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    public readonly digestsMaxDelay!: pulumi.Output<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    public readonly digestsMinDelay!: pulumi.Output<number>;
    public /*out*/ readonly features!: pulumi.Output<string[]>;
    /**
     * The internal ID for this project.
     */
    public /*out*/ readonly internalId!: pulumi.Output<string>;
    /**
     * @deprecated is_bookmarked is no longer used
     */
    public /*out*/ readonly isBookmarked!: pulumi.Output<boolean>;
    public /*out*/ readonly isPublic!: pulumi.Output<boolean>;
    /**
     * The name for the project.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    public readonly organization!: pulumi.Output<string>;
    /**
     * The optional platform for this project.
     */
    public readonly platform!: pulumi.Output<string>;
    /**
     * Use `internalId` instead.
     *
     * @deprecated Use `internal_id` instead.
     */
    public /*out*/ readonly projectId!: pulumi.Output<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    public readonly resolveAge!: pulumi.Output<number>;
    /**
     * The optional slug for this project.
     */
    public readonly slug!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The slug of the team to create the project for. **Deprecated** Use `teams` instead.
     *
     * @deprecated Use `teams` instead.
     */
    public readonly team!: pulumi.Output<string | undefined>;
    /**
     * The slugs of the teams to create the project for.
     */
    public readonly teams!: pulumi.Output<string[] | undefined>;

    /**
     * Create a SentryProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SentryProjectArgs | SentryProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SentryProjectState | undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["digestsMaxDelay"] = state ? state.digestsMaxDelay : undefined;
            resourceInputs["digestsMinDelay"] = state ? state.digestsMinDelay : undefined;
            resourceInputs["features"] = state ? state.features : undefined;
            resourceInputs["internalId"] = state ? state.internalId : undefined;
            resourceInputs["isBookmarked"] = state ? state.isBookmarked : undefined;
            resourceInputs["isPublic"] = state ? state.isPublic : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["resolveAge"] = state ? state.resolveAge : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["team"] = state ? state.team : undefined;
            resourceInputs["teams"] = state ? state.teams : undefined;
        } else {
            const args = argsOrState as SentryProjectArgs | undefined;
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            resourceInputs["digestsMaxDelay"] = args ? args.digestsMaxDelay : undefined;
            resourceInputs["digestsMinDelay"] = args ? args.digestsMinDelay : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["resolveAge"] = args ? args.resolveAge : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
            resourceInputs["team"] = args ? args.team : undefined;
            resourceInputs["teams"] = args ? args.teams : undefined;
            resourceInputs["color"] = undefined /*out*/;
            resourceInputs["features"] = undefined /*out*/;
            resourceInputs["internalId"] = undefined /*out*/;
            resourceInputs["isBookmarked"] = undefined /*out*/;
            resourceInputs["isPublic"] = undefined /*out*/;
            resourceInputs["projectId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SentryProject.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SentryProject resources.
 */
export interface SentryProjectState {
    color?: pulumi.Input<string>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    digestsMaxDelay?: pulumi.Input<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    digestsMinDelay?: pulumi.Input<number>;
    features?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The internal ID for this project.
     */
    internalId?: pulumi.Input<string>;
    /**
     * @deprecated is_bookmarked is no longer used
     */
    isBookmarked?: pulumi.Input<boolean>;
    isPublic?: pulumi.Input<boolean>;
    /**
     * The name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The optional platform for this project.
     */
    platform?: pulumi.Input<string>;
    /**
     * Use `internalId` instead.
     *
     * @deprecated Use `internal_id` instead.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    resolveAge?: pulumi.Input<number>;
    /**
     * The optional slug for this project.
     */
    slug?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    /**
     * The slug of the team to create the project for. **Deprecated** Use `teams` instead.
     *
     * @deprecated Use `teams` instead.
     */
    team?: pulumi.Input<string>;
    /**
     * The slugs of the teams to create the project for.
     */
    teams?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SentryProject resource.
 */
export interface SentryProjectArgs {
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    digestsMaxDelay?: pulumi.Input<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    digestsMinDelay?: pulumi.Input<number>;
    /**
     * The name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The optional platform for this project.
     */
    platform?: pulumi.Input<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    resolveAge?: pulumi.Input<number>;
    /**
     * The optional slug for this project.
     */
    slug?: pulumi.Input<string>;
    /**
     * The slug of the team to create the project for. **Deprecated** Use `teams` instead.
     *
     * @deprecated Use `teams` instead.
     */
    team?: pulumi.Input<string>;
    /**
     * The slugs of the teams to create the project for.
     */
    teams?: pulumi.Input<pulumi.Input<string>[]>;
}
