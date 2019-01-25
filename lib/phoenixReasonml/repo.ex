defmodule PhoenixReasonml.Repo do
  use Ecto.Repo,
    otp_app: :phoenixReasonml,
    adapter: Ecto.Adapters.Postgres
end
