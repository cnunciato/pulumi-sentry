// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Sentry.Outputs
{

    [OutputType]
    public sealed class GetSentryDashboardWidgetQueryResult
    {
        public readonly ImmutableArray<string> Aggregates;
        public readonly ImmutableArray<string> Columns;
        public readonly string Conditions;
        public readonly ImmutableArray<string> FieldAliases;
        public readonly ImmutableArray<string> Fields;
        /// <summary>
        /// The ID of this resource.
        /// </summary>
        public readonly string Id;
        public readonly string Name;
        public readonly string OrderBy;

        [OutputConstructor]
        private GetSentryDashboardWidgetQueryResult(
            ImmutableArray<string> aggregates,

            ImmutableArray<string> columns,

            string conditions,

            ImmutableArray<string> fieldAliases,

            ImmutableArray<string> fields,

            string id,

            string name,

            string orderBy)
        {
            Aggregates = aggregates;
            Columns = columns;
            Conditions = conditions;
            FieldAliases = fieldAliases;
            Fields = fields;
            Id = id;
            Name = name;
            OrderBy = orderBy;
        }
    }
}
