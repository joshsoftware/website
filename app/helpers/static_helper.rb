module StaticHelper
  def check_if_active(tab)
    Rails.logger.info '================'
    Rails.logger.info tab
    Rails.logger.info params[:action]

    params[:action] == tab ? 'active' : ''
  end
end
