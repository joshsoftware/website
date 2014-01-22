module ApplicationHelper

  def any_errors(contact, field)
    "errors" if contact.errors.keys.include? field.to_sym
  end
end
