defmodule PhoenixReasonmlWeb.PageController do
  use PhoenixReasonmlWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
