# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :phoenixReasonml,
  ecto_repos: [PhoenixReasonml.Repo]

# Configures the endpoint
config :phoenixReasonml, PhoenixReasonmlWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "+TwxFU0PyrSFXyBLniVPtS591gY3sD5W5/HUPOnnie4Yti2jTQ8vtICh3n4wf+Wg",
  render_errors: [view: PhoenixReasonmlWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PhoenixReasonml.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
